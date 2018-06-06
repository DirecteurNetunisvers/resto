<?php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use AppBundle\Entity\Utilisateurs1;
use AppBundle\Form\Utilisateurs1Type;


class UtilisateurController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/utilisateurs")
     */
    public function getUtilisateursAction(Request $request) {
        $Utilisateurs = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Utilisateurs1')
                ->findAll();

        return $Utilisateurs;
    }

    /**
     * @Rest\View()
     * @Rest\Get("/utilisateur/{pseudo}")
     */
    public function getUtilisateurAction(Request $request) {
        $utilisateur = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Utilisateurs1')
                ->findOneByPseudo( $request->get('pseudo') );
        /* @var $utilisateur */

        if (empty($utilisateur)) {
            return new JsonResponse(['message' => 'Utilisateur non trouvé'], Response::HTTP_NOT_FOUND);
        }

        return $utilisateur;
    }

    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/utilisateur")
     */
    public function postUtilisateurAction(Request $request) {
        $Utilisateur = new Utilisateurs1();
        $form = $this->createForm(Utilisateurs1Type::class, $Utilisateur);

        $form->submit($request->request->all());

        if ($form->isValid()) {
	        $password = sha1($Utilisateur->getPassword());
	        $Utilisateur->setPassword($password);       	
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Utilisateur);
            $em->flush();
            return $Utilisateur;
        } else {
            return $form;
        }
    }

    /**
     * @Rest\View()
     * @Rest\Put("/utilisateur/{id}")
     */
    public function updateUtilisateurAction(Request $request) {
        $Utilisateur = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Utilisateurs1')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire
        /* @var $Utilisateur */

        if (empty($Utilisateur)) {
            return new JsonResponse(
                ['message' => 'Utilisateur non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }

        $form = $this->createForm(Utilisateurs1Type::class, $Utilisateur);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Utilisateur);
            $em->flush();
            return $Utilisateur;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/utilisateur/{id}")
     */
    public function removeUtilisateurAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $utilisateur = $em->getRepository('AppBundle:Utilisateurs1')
                    ->find($request->get('id'));

        if ($utilisateur) {
            $em->remove($utilisateur);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Post("/uploads")
     */
    public function postUploadAction(Request $request) {
        // retrieve the file with the name given in the form.
        // do var_dump($request->files->all()); if you need to know if the file is being uploaded.

        //attribut name of input file
        $file = $request->files->get('photo');

        $status = array(
            "status"        => "success",
            "fileUploaded"  => false,
            "filename"      => ""
        );

        // If a file was uploaded
        if(!is_null($file)) {
            // generate a random name for the file but keep the extension
            $filename = uniqid().".".$file->getClientOriginalExtension();
            $path = $request->server->get('DOCUMENT_ROOT').$request->getBasePath() . "/images";
            $file->move($path,$filename); // move the file to a path
            $status = array(
                "status"        => "success",
                "fileUploaded"  => true,
                "filename"      => "/images/" . $filename
            );
        }

       return new JsonResponse($status);
    }    

}
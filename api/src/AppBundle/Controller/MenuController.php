<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Boisson1;
use AppBundle\Form\Boisson1Type;
use AppBundle\Entity\Pizza1;
use AppBundle\Form\Pizza1Type;

class MenuController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/menu/boisson")
     */
    public function getBoissonAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boisson1')
                ->findAll();

        return $Boisson;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/menu/boisson")
     */
    public function postBoissonAction(Request $request) {
        $Boisson = new Boisson1();
        $form = $this->createForm(Boisson1Type::class, $Boisson);

        $form->submit($request->request->all()); // Validation des données

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Boisson);
            $em->flush();
            return $Boisson;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/menu/boisson/{id}")
     */
    public function removeBoissonAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Boisson = $em->getRepository('AppBundle:Boisson1')
                    ->find($request->get('id'));

        if ($Boisson) {
            $em->remove($Boisson);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Put("/menu/boisson/{id}")
     */
    public function updateBoissonAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boisson1')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire
        /* @var $Boisson Place */

        if (empty($Boisson)) {
            return new JsonResponse(
                ['message' => 'Menu non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }

        $form = $this->createForm(Boisson1Type::class, $Boisson);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Boisson);
            $em->flush();
            return $Boisson;
        } else {
            return $form;
        }
    }    

    /**
     * @Rest\View()
     * @Rest\Get("/menu/pizza")
     */
    public function getPizzaAction(Request $request) {
        $Pizza = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Pizza1')
                ->findAll();

        return $Pizza;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/menu/pizza")
     */
    public function postPizzaAction(Request $request) {
        $Pizza = new Pizza1();
        $form = $this->createForm(Pizza1Type::class, $Pizza);

        $form->submit($request->request->all()); // Validation des données

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($Pizza);
            $em->flush();
            return $Pizza;
        } else {
            return $form;
        }
    }

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/menu/pizza/{id}")
     */
    public function removePizzaAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Pizza = $em->getRepository('AppBundle:Pizza1')
                    ->find($request->get('id'));

        if ($Pizza) {
            $em->remove($Pizza);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Put("/menu/pizza/{id}")
     */
    public function updatePizzaAction(Request $request) {
        $Pizza = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Pizza1')
                ->find($request->get('id')); // L'identifiant en tant que paramètre n'est plus nécessaire
        /* @var $Pizza Place */

        if (empty($Pizza)) {
            return new JsonResponse(
                ['message' => 'Menu non trouvé'], 
                Response::HTTP_NOT_FOUND
            );
        }

        $form = $this->createForm(Pizza1Type::class, $Pizza);

         // Le paramètre false dit à Symfony de garder les valeurs dans notre 
         // entité si l'utilisateur n'en fournit pas une dans sa requête
        $form->submit($request->request->all(), false);

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            // l'entité vient de la base, donc le merge n'est pas nécessaire.
            // il est utilisé juste par soucis de clarté
            $em->merge($Pizza);
            $em->flush();
            return $Pizza;
        } else {
            return $form;
        }
    }    

}
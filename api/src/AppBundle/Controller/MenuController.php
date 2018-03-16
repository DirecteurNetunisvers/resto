<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest; // alias pour toutes les annotations
use FOS\RestBundle\View\ViewHandler;
use FOS\RestBundle\View\View; // Utilisation de la vue de FOSRestBundle
use AppBundle\Entity\Boisson;
use AppBundle\Form\BoissonType;

class MenuController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/menu/boisson")
     */
    public function getBoissonAction(Request $request) {
        $places = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boisson')
                ->findAll();
        /* @var $places Place[] */

        return $places;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/menu/boisson")
     */
    public function postBoissonAction(Request $request) {
        $Boisson = new Boisson();
        $form = $this->createForm(BoissonType::class, $Boisson);

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

}
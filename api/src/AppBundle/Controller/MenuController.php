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
use AppBundle\Entity\Pizza;
use AppBundle\Form\PizzaType;

class MenuController extends Controller {

    /**
     * @Rest\View()
     * @Rest\Get("/menu/boisson")
     */
    public function getBoissonAction(Request $request) {
        $Boisson = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Boisson')
                ->findAll();

        return $Boisson;
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

     /**
     * @Rest\View(statusCode=Response::HTTP_NO_CONTENT)
     * @Rest\Delete("/menu/boisson/{id}")
     */
    public function removeBoissonAction(Request $request) {
        $em = $this->get('doctrine.orm.entity_manager');
        $Boisson = $em->getRepository('AppBundle:Boisson')
                    ->find($request->get('id'));

        if ($Boisson) {
            $em->remove($Boisson);
            $em->flush();
        }
    }

    /**
     * @Rest\View()
     * @Rest\Get("/menu/pizza")
     */
    public function getPizzaAction(Request $request) {
        $Pizza = $this->get('doctrine.orm.entity_manager')
                ->getRepository('AppBundle:Pizza')
                ->findAll();

        return $Pizza;
    }

     /**
     * @Rest\View()
     * @Rest\Post("/menu/pizza")
     */
    public function postPizzaAction(Request $request) {
        $Pizza = new Pizza();
        $form = $this->createForm(PizzaType::class, $Pizza);

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
        $Pizza = $em->getRepository('AppBundle:Pizza')
                    ->find($request->get('id'));

        if ($Pizza) {
            $em->remove($Pizza);
            $em->flush();
        }
    }    

}
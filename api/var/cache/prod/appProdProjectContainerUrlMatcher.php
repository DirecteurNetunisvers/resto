<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appProdProjectContainerUrlMatcher.
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdProjectContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    /**
     * Constructor.
     */
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($pathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($pathinfo);
        $context = $this->context;
        $request = $this->request;

        // homepage
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', 'homepage');
            }

            return array (  '_controller' => 'AppBundle\\Controller\\DefaultController::indexAction',  '_route' => 'homepage',);
        }

        if (0 === strpos($pathinfo, '/places')) {
            // app_place_getplaces
            if ($pathinfo === '/places') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_app_place_getplaces;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\PlaceController::getPlacesAction',  '_route' => 'app_place_getplaces',);
            }
            not_app_place_getplaces:

            // app_place_getplace
            if (preg_match('#^/places/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_app_place_getplace;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'app_place_getplace')), array (  '_controller' => 'AppBundle\\Controller\\PlaceController::getPlaceAction',));
            }
            not_app_place_getplace:

            // app_place_postplaces
            if ($pathinfo === '/places') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_app_place_postplaces;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\PlaceController::postPlacesAction',  '_route' => 'app_place_postplaces',);
            }
            not_app_place_postplaces:

            // app_place_removeplace
            if (preg_match('#^/places/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_app_place_removeplace;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'app_place_removeplace')), array (  '_controller' => 'AppBundle\\Controller\\PlaceController::removePlaceAction',));
            }
            not_app_place_removeplace:

        }

        if (0 === strpos($pathinfo, '/users')) {
            // app_user_getusers
            if ($pathinfo === '/users') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_app_user_getusers;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\UserController::getUsersAction',  '_route' => 'app_user_getusers',);
            }
            not_app_user_getusers:

            // app_user_getuser
            if (preg_match('#^/users/(?P<user_id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_app_user_getuser;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'app_user_getuser')), array (  '_controller' => 'AppBundle\\Controller\\UserController::getUserAction',));
            }
            not_app_user_getuser:

            // app_user_postusers
            if ($pathinfo === '/users') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_app_user_postusers;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\UserController::postUsersAction',  '_route' => 'app_user_postusers',);
            }
            not_app_user_postusers:

            // app_user_removeuser
            if (preg_match('#^/users/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_app_user_removeuser;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'app_user_removeuser')), array (  '_controller' => 'AppBundle\\Controller\\UserController::removeUserAction',));
            }
            not_app_user_removeuser:

        }

        if (0 === strpos($pathinfo, '/places')) {
            // remove_place
            if (preg_match('#^/places/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_remove_place;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'remove_place')), array (  '_controller' => 'AppBundle\\Controller\\PlaceController::removePlaceAction',  '_format' => NULL,));
            }
            not_remove_place:

            // get_places
            if ($pathinfo === '/places') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_get_places;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\PlaceController::getPlacesAction',  '_format' => NULL,  '_route' => 'get_places',);
            }
            not_get_places:

            // get_place
            if (preg_match('#^/places/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_get_place;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'get_place')), array (  '_controller' => 'AppBundle\\Controller\\PlaceController::getPlaceAction',  '_format' => NULL,));
            }
            not_get_place:

            // post_places
            if ($pathinfo === '/places') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_post_places;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\PlaceController::postPlacesAction',  '_format' => NULL,  '_route' => 'post_places',);
            }
            not_post_places:

        }

        if (0 === strpos($pathinfo, '/users')) {
            // remove_user
            if (preg_match('#^/users/(?P<id>[^/]++)$#s', $pathinfo, $matches)) {
                if ($this->context->getMethod() != 'DELETE') {
                    $allow[] = 'DELETE';
                    goto not_remove_user;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'remove_user')), array (  '_controller' => 'AppBundle\\Controller\\UserController::removeUserAction',  '_format' => NULL,));
            }
            not_remove_user:

            // get_users
            if ($pathinfo === '/users') {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_get_users;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\UserController::getUsersAction',  '_format' => NULL,  '_route' => 'get_users',);
            }
            not_get_users:

            // get_user
            if (preg_match('#^/users/(?P<user_id>[^/]++)$#s', $pathinfo, $matches)) {
                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                    $allow = array_merge($allow, array('GET', 'HEAD'));
                    goto not_get_user;
                }

                return $this->mergeDefaults(array_replace($matches, array('_route' => 'get_user')), array (  '_controller' => 'AppBundle\\Controller\\UserController::getUserAction',  '_format' => NULL,));
            }
            not_get_user:

            // post_users
            if ($pathinfo === '/users') {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_post_users;
                }

                return array (  '_controller' => 'AppBundle\\Controller\\UserController::postUsersAction',  '_format' => NULL,  '_route' => 'post_users',);
            }
            not_post_users:

        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}

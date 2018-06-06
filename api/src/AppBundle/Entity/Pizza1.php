<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Pizza1
 *
 * @ORM\Table(name="pizza1")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\Pizza1Repository")
 */
class Pizza1
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="gm", type="string", length=255)
     */
    private $gm;

    /**
     * @var string
     *
     * @ORM\Column(name="pm", type="string", length=255)
     */
    private $pm;

    /**
     * @var string
     *
     * @ORM\Column(name="ingredient", type="string", length=255)
     */
    private $ingredient;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nom
     *
     * @param string $nom
     *
     * @return Pizza1
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set gm
     *
     * @param string $gm
     *
     * @return Pizza1
     */
    public function setGm($gm)
    {
        $this->gm = $gm;

        return $this;
    }

    /**
     * Get gm
     *
     * @return string
     */
    public function getGm()
    {
        return $this->gm;
    }

    /**
     * Set pm
     *
     * @param string $pm
     *
     * @return Pizza1
     */
    public function setPm($pm)
    {
        $this->pm = $pm;

        return $this;
    }

    /**
     * Get pm
     *
     * @return string
     */
    public function getPm()
    {
        return $this->pm;
    }

    /**
     * Set ingredient
     *
     * @param string $ingredient
     *
     * @return Pizza1
     */
    public function setIngredient($ingredient)
    {
        $this->ingredient = $ingredient;

        return $this;
    }

    /**
     * Get ingredient
     *
     * @return string
     */
    public function getIngredient()
    {
        return $this->ingredient;
    }
}


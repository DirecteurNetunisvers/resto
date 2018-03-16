<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_a24a228f61e8827b2278a84cb2acbed25ffa1c06da3f0b61aceac9706c040666 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_911f91b50464509f5c4f1be30cea1d4ac48511fdffc6b796c3fef59015b76e36 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_911f91b50464509f5c4f1be30cea1d4ac48511fdffc6b796c3fef59015b76e36->enter($__internal_911f91b50464509f5c4f1be30cea1d4ac48511fdffc6b796c3fef59015b76e36_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_911f91b50464509f5c4f1be30cea1d4ac48511fdffc6b796c3fef59015b76e36->leave($__internal_911f91b50464509f5c4f1be30cea1d4ac48511fdffc6b796c3fef59015b76e36_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_2bef15773bc17d08475d98e67150e00daea7f91375a72ad08095335a79722c12 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_2bef15773bc17d08475d98e67150e00daea7f91375a72ad08095335a79722c12->enter($__internal_2bef15773bc17d08475d98e67150e00daea7f91375a72ad08095335a79722c12_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\HttpFoundationExtension')->generateAbsoluteUrl($this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_2bef15773bc17d08475d98e67150e00daea7f91375a72ad08095335a79722c12->leave($__internal_2bef15773bc17d08475d98e67150e00daea7f91375a72ad08095335a79722c12_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_e19536d988d2638e4a2369bc3355c9eb9d14c434b533ede975e17acd9a323496 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e19536d988d2638e4a2369bc3355c9eb9d14c434b533ede975e17acd9a323496->enter($__internal_e19536d988d2638e4a2369bc3355c9eb9d14c434b533ede975e17acd9a323496_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["exception"] ?? $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, ($context["status_code"] ?? $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, ($context["status_text"] ?? $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_e19536d988d2638e4a2369bc3355c9eb9d14c434b533ede975e17acd9a323496->leave($__internal_e19536d988d2638e4a2369bc3355c9eb9d14c434b533ede975e17acd9a323496_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_6c5840af60f33318aa440c6c523635fd841479aa90311c487a419d4e2db5fc84 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_6c5840af60f33318aa440c6c523635fd841479aa90311c487a419d4e2db5fc84->enter($__internal_6c5840af60f33318aa440c6c523635fd841479aa90311c487a419d4e2db5fc84_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_6c5840af60f33318aa440c6c523635fd841479aa90311c487a419d4e2db5fc84->leave($__internal_6c5840af60f33318aa440c6c523635fd841479aa90311c487a419d4e2db5fc84_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@Twig/layout.html.twig' %}

{% block head %}
    <link href=\"{{ absolute_url(asset('bundles/framework/css/exception.css')) }}\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
{% endblock %}

{% block title %}
    {{ exception.message }} ({{ status_code }} {{ status_text }})
{% endblock %}

{% block body %}
    {% include '@Twig/Exception/exception.html.twig' %}
{% endblock %}
", "@Twig/Exception/exception_full.html.twig", "/opt/lampp/htdocs/net_api/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views/Exception/exception_full.html.twig");
    }
}

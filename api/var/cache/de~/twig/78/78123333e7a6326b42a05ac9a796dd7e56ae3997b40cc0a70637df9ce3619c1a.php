<?php

/* base.html.twig */
class __TwigTemplate_3435939c23660a21b42283d36862f825d614754722fd088a4f4cf0e012d36971 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_0c49314e613154b119ca5e0599b0276d5b0fcda04c9601fd46763403f8818971 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_0c49314e613154b119ca5e0599b0276d5b0fcda04c9601fd46763403f8818971->enter($__internal_0c49314e613154b119ca5e0599b0276d5b0fcda04c9601fd46763403f8818971_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
        ";
        // line 6
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 7
        echo "        <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
        ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "        ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 12
        echo "    </body>
</html>
";
        
        $__internal_0c49314e613154b119ca5e0599b0276d5b0fcda04c9601fd46763403f8818971->leave($__internal_0c49314e613154b119ca5e0599b0276d5b0fcda04c9601fd46763403f8818971_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_9e4415a8424e39f0cac1e6d9dffa0c4cf8c987a901a9b5ef0923a9a022226d9e = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_9e4415a8424e39f0cac1e6d9dffa0c4cf8c987a901a9b5ef0923a9a022226d9e->enter($__internal_9e4415a8424e39f0cac1e6d9dffa0c4cf8c987a901a9b5ef0923a9a022226d9e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_9e4415a8424e39f0cac1e6d9dffa0c4cf8c987a901a9b5ef0923a9a022226d9e->leave($__internal_9e4415a8424e39f0cac1e6d9dffa0c4cf8c987a901a9b5ef0923a9a022226d9e_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_76dc9dd0f37fbce1aba7c6af621b6a53f1167a15daf9ed76d0214488b9317064 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_76dc9dd0f37fbce1aba7c6af621b6a53f1167a15daf9ed76d0214488b9317064->enter($__internal_76dc9dd0f37fbce1aba7c6af621b6a53f1167a15daf9ed76d0214488b9317064_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_76dc9dd0f37fbce1aba7c6af621b6a53f1167a15daf9ed76d0214488b9317064->leave($__internal_76dc9dd0f37fbce1aba7c6af621b6a53f1167a15daf9ed76d0214488b9317064_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_22f411cb8f6bf696e12f3a7355a86cab180d5db9377ddba3f054cf1728f2bf7c = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_22f411cb8f6bf696e12f3a7355a86cab180d5db9377ddba3f054cf1728f2bf7c->enter($__internal_22f411cb8f6bf696e12f3a7355a86cab180d5db9377ddba3f054cf1728f2bf7c_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_22f411cb8f6bf696e12f3a7355a86cab180d5db9377ddba3f054cf1728f2bf7c->leave($__internal_22f411cb8f6bf696e12f3a7355a86cab180d5db9377ddba3f054cf1728f2bf7c_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_498dd67bd73e74a82241746b5934b54915c828899d271189d9a3d47ac229ec00 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_498dd67bd73e74a82241746b5934b54915c828899d271189d9a3d47ac229ec00->enter($__internal_498dd67bd73e74a82241746b5934b54915c828899d271189d9a3d47ac229ec00_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_498dd67bd73e74a82241746b5934b54915c828899d271189d9a3d47ac229ec00->leave($__internal_498dd67bd73e74a82241746b5934b54915c828899d271189d9a3d47ac229ec00_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  93 => 11,  82 => 10,  71 => 6,  59 => 5,  50 => 12,  47 => 11,  45 => 10,  38 => 7,  36 => 6,  32 => 5,  26 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"UTF-8\" />
        <title>{% block title %}Welcome!{% endblock %}</title>
        {% block stylesheets %}{% endblock %}
        <link rel=\"icon\" type=\"image/x-icon\" href=\"{{ asset('favicon.ico') }}\" />
    </head>
    <body>
        {% block body %}{% endblock %}
        {% block javascripts %}{% endblock %}
    </body>
</html>
", "base.html.twig", "/opt/lampp/htdocs/net_api/app/Resources/views/base.html.twig");
    }
}

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
        $__internal_a67ce89347b3ffe32a64a6427c7698cf8694fd5bba01e006d5b9fba5da251e86 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_a67ce89347b3ffe32a64a6427c7698cf8694fd5bba01e006d5b9fba5da251e86->enter($__internal_a67ce89347b3ffe32a64a6427c7698cf8694fd5bba01e006d5b9fba5da251e86_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "base.html.twig"));

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
        
        $__internal_a67ce89347b3ffe32a64a6427c7698cf8694fd5bba01e006d5b9fba5da251e86->leave($__internal_a67ce89347b3ffe32a64a6427c7698cf8694fd5bba01e006d5b9fba5da251e86_prof);

    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        $__internal_db8f6b545e65fc2f012c6965ee5aa845b7cfcf8a18155b943bbb22b4a99c4a91 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_db8f6b545e65fc2f012c6965ee5aa845b7cfcf8a18155b943bbb22b4a99c4a91->enter($__internal_db8f6b545e65fc2f012c6965ee5aa845b7cfcf8a18155b943bbb22b4a99c4a91_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_db8f6b545e65fc2f012c6965ee5aa845b7cfcf8a18155b943bbb22b4a99c4a91->leave($__internal_db8f6b545e65fc2f012c6965ee5aa845b7cfcf8a18155b943bbb22b4a99c4a91_prof);

    }

    // line 6
    public function block_stylesheets($context, array $blocks = array())
    {
        $__internal_55d57e37b64675a32780eb38d2435a5bfc54ee0cfe4c27400be43d170e8d05ef = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_55d57e37b64675a32780eb38d2435a5bfc54ee0cfe4c27400be43d170e8d05ef->enter($__internal_55d57e37b64675a32780eb38d2435a5bfc54ee0cfe4c27400be43d170e8d05ef_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "stylesheets"));

        
        $__internal_55d57e37b64675a32780eb38d2435a5bfc54ee0cfe4c27400be43d170e8d05ef->leave($__internal_55d57e37b64675a32780eb38d2435a5bfc54ee0cfe4c27400be43d170e8d05ef_prof);

    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
        $__internal_0619da386e4c4c12c0961195ccf5e7a7e5d08ef5936332b2cd49fd2f3e610596 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_0619da386e4c4c12c0961195ccf5e7a7e5d08ef5936332b2cd49fd2f3e610596->enter($__internal_0619da386e4c4c12c0961195ccf5e7a7e5d08ef5936332b2cd49fd2f3e610596_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_0619da386e4c4c12c0961195ccf5e7a7e5d08ef5936332b2cd49fd2f3e610596->leave($__internal_0619da386e4c4c12c0961195ccf5e7a7e5d08ef5936332b2cd49fd2f3e610596_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        $__internal_5809506299291cc63562a92a5cbad0942f840779e053d8d524f2f180529b7475 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_5809506299291cc63562a92a5cbad0942f840779e053d8d524f2f180529b7475->enter($__internal_5809506299291cc63562a92a5cbad0942f840779e053d8d524f2f180529b7475_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "javascripts"));

        
        $__internal_5809506299291cc63562a92a5cbad0942f840779e053d8d524f2f180529b7475->leave($__internal_5809506299291cc63562a92a5cbad0942f840779e053d8d524f2f180529b7475_prof);

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

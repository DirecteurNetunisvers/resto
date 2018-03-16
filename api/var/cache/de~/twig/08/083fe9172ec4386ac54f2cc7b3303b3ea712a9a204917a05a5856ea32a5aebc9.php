<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_cbb460003df767ea95411069feb3e630840852ce6c8ea763520408c4d94d4487 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_838a4b6fe402b149875df2de5e8fd4d1b7331e7454e017f34b9e36ad48dbd1c1 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_838a4b6fe402b149875df2de5e8fd4d1b7331e7454e017f34b9e36ad48dbd1c1->enter($__internal_838a4b6fe402b149875df2de5e8fd4d1b7331e7454e017f34b9e36ad48dbd1c1_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_838a4b6fe402b149875df2de5e8fd4d1b7331e7454e017f34b9e36ad48dbd1c1->leave($__internal_838a4b6fe402b149875df2de5e8fd4d1b7331e7454e017f34b9e36ad48dbd1c1_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_6a625647b7bb42abbe8b3e54320dc98e75a6b57de5189a2e66c414a57e92e972 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_6a625647b7bb42abbe8b3e54320dc98e75a6b57de5189a2e66c414a57e92e972->enter($__internal_6a625647b7bb42abbe8b3e54320dc98e75a6b57de5189a2e66c414a57e92e972_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_6a625647b7bb42abbe8b3e54320dc98e75a6b57de5189a2e66c414a57e92e972->leave($__internal_6a625647b7bb42abbe8b3e54320dc98e75a6b57de5189a2e66c414a57e92e972_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_61fc355cb2a0e6174bac7385ed8485b7ca156df8d58acefdb78689609ba76c99 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_61fc355cb2a0e6174bac7385ed8485b7ca156df8d58acefdb78689609ba76c99->enter($__internal_61fc355cb2a0e6174bac7385ed8485b7ca156df8d58acefdb78689609ba76c99_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_61fc355cb2a0e6174bac7385ed8485b7ca156df8d58acefdb78689609ba76c99->leave($__internal_61fc355cb2a0e6174bac7385ed8485b7ca156df8d58acefdb78689609ba76c99_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_8e59a3743187278cc82eb4801a15906e9902d2927585c087058d471543b44b96 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_8e59a3743187278cc82eb4801a15906e9902d2927585c087058d471543b44b96->enter($__internal_8e59a3743187278cc82eb4801a15906e9902d2927585c087058d471543b44b96_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\HttpKernelExtension')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_8e59a3743187278cc82eb4801a15906e9902d2927585c087058d471543b44b96->leave($__internal_8e59a3743187278cc82eb4801a15906e9902d2927585c087058d471543b44b96_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block toolbar %}{% endblock %}

{% block menu %}
<span class=\"label\">
    <span class=\"icon\">{{ include('@WebProfiler/Icon/router.svg') }}</span>
    <strong>Routing</strong>
</span>
{% endblock %}

{% block panel %}
    {{ render(path('_profiler_router', { token: token })) }}
{% endblock %}
", "@WebProfiler/Collector/router.html.twig", "/opt/lampp/htdocs/net_api/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/router.html.twig");
    }
}

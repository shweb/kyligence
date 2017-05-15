<?php

/* dialog.twig */
class __TwigTemplate_89f6e1e19b7940235e4c8e29163a399e86f98dc1426297d0a8bcdcbfb3dffe5f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<div class=\"dialog wpml-dialog\" title=\"";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "title", array()));
        echo "\" data-close=\"";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "close", array()));
        echo "\" data-refresh=\"";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "refresh", array()));
        echo "\" style=\"display: none;\">
\t";
        // line 2
        if (isset($context["sourceLanguage"])) { $_sourceLanguage_ = $context["sourceLanguage"]; } else { $_sourceLanguage_ = null; }
        $this->loadTemplate("source-language.twig", "dialog.twig", 2)->display(array_merge($context, $_sourceLanguage_));
        // line 3
        echo "\t<div class=\"summary\" style=\"display: none;\"></div>
\t<div class=\"spinner\"></div>
</div>
";
    }

    public function getTemplateName()
    {
        return "dialog.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  34 => 3,  31 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "dialog.twig", "/var/www/html/kyligence.trustylabs.mg/wp-content/plugins/wpml-translation-management/templates/words-count/dialog.twig");
    }
}

<?php

/* dialog-box.twig */
class __TwigTemplate_23d9fea706cc7947c715b81863852fa9156411f0b6be58fbe9050de0e4ca8bf1 extends Twig_Template
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
        echo "<div id=\"wpml-ls-dialog\" style=\"display:none;\" >
    <div class=\"js-wpml-ls-dialog-inner\">

    </div>
    <div class=\"wpml-dialog-footer \">
        <span class=\"errors icl_error_text\"></span>
        <input class=\"js-wpml-ls-dialog-close cancel wpml-dialog-close-button alignleft\" value=\"";
        // line 7
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($_strings_, "misc", array()), "button_cancel", array()), "html", null, true);
        echo "\" type=\"button\">
        <input class=\"js-wpml-ls-dialog-save button-primary term-save alignright\" value=\"";
        // line 8
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($_strings_, "misc", array()), "button_save", array()), "html", null, true);
        echo "\" type=\"submit\">
        <span class=\"spinner alignright\"></span>
    </div>
</div>";
    }

    public function getTemplateName()
    {
        return "dialog-box.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  32 => 8,  27 => 7,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "dialog-box.twig", "/var/www/html/kyligence.trustylabs.mg/wp-content/plugins/sitepress-multilingual-cms/templates/language-switcher-admin-ui/dialog-box.twig");
    }
}

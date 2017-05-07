<?php

/* box.twig */
class __TwigTemplate_2424aa50a8474a8c61f7634589ba6768ee213815a41feb301d42d539ae3a2f26 extends Twig_Template
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
        echo "<div class=\"wpml-accordion wpml-wc-accordion\">
\t<h4 class=\"handle\"><span>";
        // line 2
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "title", array()), "html", null, true);
        echo "</span></h4>

\t<div class=\"inside\">
\t\t<input type=\"hidden\" name=\"wpml_words_count_panel_nonce\" value=\"";
        // line 5
        if (isset($context["nonces"])) { $_nonces_ = $context["nonces"]; } else { $_nonces_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_nonces_, "wpml_words_count_panel_nonce", array()));
        echo "\">
\t\t<input type=\"hidden\" name=\"wpml_words_count_chunk_size\" value=\"";
        // line 6
        if (isset($context["wc_chunk_size"])) { $_wc_chunk_size_ = $context["wc_chunk_size"]; } else { $_wc_chunk_size_ = null; }
        echo twig_escape_filter($this->env, $_wc_chunk_size_);
        echo "\">

\t\t<div class=\"wpml-wc-messages\">
\t\t\t";
        // line 9
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($_strings_, "messages", array()));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 10
            echo "\t\t\t\t<p>";
            if (isset($context["message"])) { $_message_ = $context["message"]; } else { $_message_ = null; }
            echo twig_escape_filter($this->env, $_message_, "html", null, true);
            echo "</p>
\t\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 12
        echo "\t\t</div>
\t\t<div class=\"wpml-wc-buttons\">
\t\t\t<p>
\t\t\t\t<a class=\"button-primary\" href=\"";
        // line 15
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "openDialogButtonURL", array()), "html", null, true);
        echo "\" title=\"";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "openDialogButton", array()));
        echo "\">
\t\t\t\t\t";
        // line 16
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "openDialogButton", array()), "html", null, true);
        echo "
\t\t\t\t</a>
\t\t\t</p>

\t\t\t<p class=\"call-to-action\">
\t\t\t\t";
        // line 21
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($_strings_, "callToAction", array()), "Text", array()), "html", null, true);
        echo " <a href=\"";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($_strings_, "callToAction", array()), "linkURL", array()), "html", null, true);
        echo "\" target=\"_blank\" title=\"";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($_strings_, "callToAction", array()), "linkText", array()));
        echo "\">";
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute($_strings_, "callToAction", array()), "linkText", array()), "html", null, true);
        echo "</a>.
\t\t\t</p>
\t\t</div>
\t\t";
        // line 24
        if (isset($context["dialog"])) { $_dialog_ = $context["dialog"]; } else { $_dialog_ = null; }
        $this->loadTemplate("dialog.twig", "box.twig", 24)->display(array_merge($context, $_dialog_));
        // line 25
        echo "\t</div>
</div>";
    }

    public function getTemplateName()
    {
        return "box.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 25,  94 => 24,  78 => 21,  69 => 16,  61 => 15,  56 => 12,  46 => 10,  41 => 9,  34 => 6,  29 => 5,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "box.twig", "/var/www/html/artbeat-studio.com/k-gence/wp-content/plugins/wpml-translation-management/templates/words-count/box.twig");
    }
}

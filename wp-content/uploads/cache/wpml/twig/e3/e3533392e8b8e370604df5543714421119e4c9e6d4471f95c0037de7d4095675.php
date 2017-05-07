<?php

/* source-language.twig */
class __TwigTemplate_940923346a7c1f83fbd97b17c845f77bfe68a87c4ea708999a57977cf644b085 extends Twig_Template
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
        echo "<div class=\"source_language\">
\t<label for=\"source-language-selector\">";
        // line 2
        if (isset($context["strings"])) { $_strings_ = $context["strings"]; } else { $_strings_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_strings_, "sourceLanguageSelectorLabel", array()), "html", null, true);
        echo ":</label>
\t<select id=\"source-language-selector\">
\t\t";
        // line 4
        if (isset($context["activeLanguages"])) { $_activeLanguages_ = $context["activeLanguages"]; } else { $_activeLanguages_ = null; }
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($_activeLanguages_);
        foreach ($context['_seq'] as $context["_key"] => $context["activeLanguage"]) {
            // line 5
            echo "\t\t\t";
            if (isset($context["activeLanguage"])) { $_activeLanguage_ = $context["activeLanguage"]; } else { $_activeLanguage_ = null; }
            if (isset($context["defaultLanguage"])) { $_defaultLanguage_ = $context["defaultLanguage"]; } else { $_defaultLanguage_ = null; }
            $context["default"] = ($this->getAttribute($_activeLanguage_, "code", array()) == $_defaultLanguage_);
            // line 6
            echo "\t\t\t";
            if (isset($context["activeLanguage"])) { $_activeLanguage_ = $context["activeLanguage"]; } else { $_activeLanguage_ = null; }
            $context["showTranslated"] = ($this->getAttribute($_activeLanguage_, "native_name", array(), "array") != $this->getAttribute($_activeLanguage_, "translated_name", array(), "array"));
            // line 7
            echo "\t\t\t";
            if (isset($context["showTranslated"])) { $_showTranslated_ = $context["showTranslated"]; } else { $_showTranslated_ = null; }
            if (isset($context["activeLanguage"])) { $_activeLanguage_ = $context["activeLanguage"]; } else { $_activeLanguage_ = null; }
            $context["language"] = (($_showTranslated_) ? (((($this->getAttribute($_activeLanguage_, "translated_name", array(), "array") . " (") . $this->getAttribute($_activeLanguage_, "native_name", array(), "array")) . ")")) : ($this->getAttribute($_activeLanguage_, "native_name", array(), "array")));
            // line 8
            echo "\t\t\t<option value=\"";
            if (isset($context["activeLanguage"])) { $_activeLanguage_ = $context["activeLanguage"]; } else { $_activeLanguage_ = null; }
            echo twig_escape_filter($this->env, $this->getAttribute($_activeLanguage_, "code", array()));
            echo "\"";
            if (isset($context["default"])) { $_default_ = $context["default"]; } else { $_default_ = null; }
            if ($_default_) {
                echo " selected=\"selected\" ";
            }
            echo ">";
            if (isset($context["language"])) { $_language_ = $context["language"]; } else { $_language_ = null; }
            echo twig_escape_filter($this->env, $_language_, "html", null, true);
            echo "</option>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['activeLanguage'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 10
        echo "\t</select>
\t<input type=\"hidden\" name=\"wpml_words_count_source_language_nonce\" value=\"";
        // line 11
        if (isset($context["nonces"])) { $_nonces_ = $context["nonces"]; } else { $_nonces_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_nonces_, "wpml_words_count_source_language_nonce", array()));
        echo "\">
</div>";
    }

    public function getTemplateName()
    {
        return "source-language.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  68 => 11,  65 => 10,  47 => 8,  42 => 7,  38 => 6,  33 => 5,  28 => 4,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "source-language.twig", "/var/www/html/artbeat-studio.com/k-gence/wp-content/plugins/wpml-translation-management/templates/words-count/source-language.twig");
    }
}

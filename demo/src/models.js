import SemanticRoleLabeling from './components/demos/SemanticRoleLabeling';
import OpenIe from './components/demos/OpenIe';
import Event2Mind from './components/demos/Event2Mind';
import TextualEntailment from './components/demos/TextualEntailment';
import SentimentAnalysis from './components/demos/SentimentAnalysis';
import ReadingComprehension from './components/demos/ReadingComprehension';
import Coref from './components/demos/Coref';
import NamedEntityRecognition from './components/demos/NamedEntityRecognition';
import ConstituencyParser from './components/demos/ConstituencyParser';
import DependencyParser from './components/demos/DependencyParser';
import WikiTables from './components/demos/WikiTables';
import Nlvr from './components/demos/Nlvr';
import Atis from './components/demos/Atis';
import QuarelZero from './components/demos/QuarelZero';
import LanguageModel from './components/demos/LanguageModel';
import MaskedLm from './components/demos/MaskedLm';
import annotateIcon from './icons/annotate-14px.svg';
import otherIcon from './icons/other-14px.svg';
import parseIcon from './icons/parse-14px.svg';
import passageIcon from './icons/passage-14px.svg';
import questionIcon from './icons/question-14px.svg';
import addIcon from './icons/add-14px.svg';

// This is the order in which they will appear in the menu
const modelGroups = [
    {
        label: "Annotate a sentence",
        iconSrc: annotateIcon,
        defaultOpen: true,
        models: [
            {model: "semantic-role-labeling", name: "Semantic Role Labeling", component: SemanticRoleLabeling},
            {model: "named-entity-recognition", name: "Named Entity Recognition", component: NamedEntityRecognition},
            {model: "constituency-parsing", name: "Constituency Parsing", component: ConstituencyParser},
            {model: "dependency-parsing", name: "Dependency Parsing", component: DependencyParser},
            {model: "open-information-extraction", name: "Open Information Extraction", component: OpenIe},
            {model: "sentiment-analysis", name: "Sentiment Analysis", component: SentimentAnalysis}
        ]
    },
    {
        label: "Annotate a passage",
        iconSrc: passageIcon,
        defaultOpen: true,
        models: [
            {model: "coreference-resolution", name: "Coreference Resolution", component: Coref}
        ]
    },
    {
        label: "Answer a question",
        iconSrc: questionIcon,
        defaultOpen: true,
        models: [
            {model: "reading-comprehension", name: "Reading Comprehension", component: ReadingComprehension}
        ]
    },
    {
        label: "Semantic parsing",
        iconSrc: parseIcon,
        defaultOpen: true,
        models: [
            {model: "wikitables-parser", name: "WikiTableQuestions Semantic Parser", component: WikiTables},
            {model: "nlvr-parser", name: "Cornell NLVR Semantic Parser", component: Nlvr},
            {model: "atis-parser", name: "Text to SQL (ATIS)", component: Atis},
            {model: "quarel-parser-zero", name: "QuaRel Zero", component: QuarelZero}
        ]
    },
    {
        label: "Other",
        iconSrc: otherIcon,
        defaultOpen: true,
        models: [
            {model: "textual-entailment", name: "Textual Entailment", component: TextualEntailment},
            {model: "event2mind", name: "Event2Mind", component: Event2Mind},
            {model: "next-token-lm", name: "Language Modeling", component: LanguageModel},
            {model: "masked-lm", name: "Masked Language Modeling", component: MaskedLm}
        ]
    },
    {
        label: "Contributing",
        iconSrc: addIcon,
        defaultOpen: true,
        models: [
            {model: "user-models", name: "Your model here!"}
        ]
    }
]

// Create mapping from model to component
let modelComponents = {}
modelGroups.forEach((mg) => mg.models.forEach(({model, component}) => modelComponents[model] = component));

export { modelComponents, modelGroups }

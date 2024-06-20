from transformers import AutoTokenizer, AutoModelForSequenceClassification, RobertaForSequenceClassification
from torch import no_grad


models = set([
    'facebook/roberta-hate-speech-dynabench-r4-target',
    'Hate-speech-CNERG/english-abusive-MuRIL',
    'IMSyPP/hate_speech_en'
])


def listModels():
    print(list(models))
    return list(models)

def useModel(data,model):
    if model in models:
        return runModel(data,model)


def runModel(input,modelidentifier):
    tokenizer = AutoTokenizer.from_pretrained(modelidentifier)
    model = RobertaForSequenceClassification.from_pretrained(modelidentifier)

    inputs = tokenizer(input, return_tensors="pt")

    with no_grad():
        logits = model(**inputs).logits

    predicted_class_id = logits.argmax().item()
    out = model.config.id2label[predicted_class_id]
    return (parseOutput(out,modelidentifier),out)

def parseOutput(output,model):
    ishate = False
    match model:
        case "IMSyPP/hate_speech_en":
            ishate = output == 'LABEL_2' or output == 'LABEL_3'
        case "facebook/roberta-hate-speech-dynabench-r4-target":
            ishate = output == 'hate'
        case "Hate-speech-CNERG/english-abusive-MuRIL":
            ishate = output == 'LABEL_1'
    return {'ishateful':ishate}

# TikGuard Backend - AI

This is a Django backend to use with the NextJS frontend to interact with various AI models.

## Usage
```
$ python3 -m venv venv/
```

### Windows
```
$ .\venv\Scripts\python.exe -m pip install -r requirements.txt
$ .\venv\Scripts\python.exe .\manage.py runserver
```

### Linux/Mac
```
$ ./venv/bin/python -m pip install -r requirements.txt
$ ./venv/bin/python ./manage.py runserver
```

## Endpoints

| Endpoint | Purpose | Method | Data | Response |
|----------|---------|--------|------|----------|
| `/api/list_models` | To list the current models accessible via the API | GET | N/A | `{"models":[<list of model identifiers>]}` |
| `/api/use_model` | To utilise an accesible model | POST | `{"model":"model-name-from-list","data":"text-data-to-check"}` | `{"parsed_response": {"ishateful": <bool>}, "raw_response": "<raw model response>"}` |

## Author

Made by [sealldeveloper / sealldev](https://seall.dev)

## Models

- [facebook/roberta-hate-speech-dynabench-r4-target](https://huggingface.co/facebook/roberta-hate-speech-dynabench-r4-target)
- [Hate-speech-CNERG/english-abusive-MuRIL](https://huggingface.co/Hate-speech-CNERG/english-abusive-MuRIL)
- [IMSyPP/hate_speech_en](https://huggingface.co/IMSyPP/hate_speech_en)

### Papers

- Learning from the Worst: Dynamically Generated Datasets to Improve Online Hate Detection by Bertie Vidgen and Tristan Thrush and Zeerak Waseem and Douwe Kiela (2021)
- Data Bootstrapping Approaches to Improve Low Resource Abusive Language Detection for Indic Languages by Das, Mithun and Banerjee, Somnath and Mukherjee, Animesh (2022)
- Kralj Novak, P., Scantamburlo, T., Pelicon, A., Cinelli, M., Mozetič, I., & Zollo, F. (2022, July). Handling disagreement in hate speech modelling. In International Conference on Information Processing and Management of Uncertainty in Knowledge-Based Systems (pp. 681-695). Cham: Springer International Publishing. https://link.springer.com/chapter/10.1007/978-3-031-08974-9_54




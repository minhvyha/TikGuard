from django.shortcuts import render
from django.http import JsonResponse
from .utils.aimodels import listModels, useModel
from django.views.decorators.csrf import csrf_exempt
import json

def list_models(request):
    if request.method == 'GET':
        return JsonResponse({'models': listModels()})
    else:
        return JsonResponse({'error':'Invalid request method'}, status=400)

@csrf_exempt
def use_model(request):
    if request.method == 'POST':
        
        req_data = json.loads(request.body)
        
        if 'model' in req_data.keys() and 'text' in req_data.keys():

            parsed_data,raw_data = useModel(req_data['text'],req_data['model'])
            
            return JsonResponse({'parsed_response':parsed_data,'raw_response':raw_data})
        else:
            return JsonResponse({'error':'Must provide both \'model\' and \'text\' parameters'}, status=400)
    else:
        return JsonResponse({'error':'Invalid request method'}, status=400)
# Create your views here.

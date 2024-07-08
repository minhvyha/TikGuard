from fastapi import FastAPI
import joblib
import numpy as np
import pickle

# model = joblib.load('app/model.joblib')

with open('app/model.pkl', 'rb') as file:
    model = pickle.load(file)

with open('app/transformer.pkl', 'rb') as file:
    transformer = pickle.load(file)

app = FastAPI()

@app.get('/')
def read_root():
    return {'message': 'Iris model API'}
@app.get('/get')
def get():
    return {'message': 'Iris model API'}

@app.post('/predict')
def predict(data: dict):
    text = transformer.transform([data['text']]).toarray()
    return_data = model.predict(text)

    return {'hate_speech_level': return_data[0]}


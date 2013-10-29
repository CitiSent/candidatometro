import json
import requests
import yaml

def get_json(json_url, filepath):

    req = requests.get(json_url)
    data = req.json()

    json_file = open(filepath, 'w')
    json_file.write(json.dumps(data))
    json_file.close()


if __name__ == '__main__':

    config = yaml.load(open('config.yml', 'r'))

    # Update the candidatos.json file
    for item in config['candidatos']:
        get_json(item['json'], item['name'])

    # Update the data in agenda
    for item in config['agenda']:
        get_json(item['json'], item['name'])


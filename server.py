import warnings

with warnings.catch_warnings():
    warnings.filterwarnings("ignore",category=DeprecationWarning)
    from bottle import get, post, run, debug, default_app, request, template, static_file 

import pyrebase_job_list as job_list

show_completed = True

@get('/')
def get_index():
    return static_file("index.html", root='./dist')

@get('/static/<filepath:path>')
def server_static(filepath):
    print(filepath)
    return static_file(filepath, root='./static')

setup()
#application = default_app()
debug(True)
run(host='0.0.0.0', port=8080)


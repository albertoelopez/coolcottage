from flask import Flask, send_from_directory, jsonify, request

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/calculate-adu-size', methods=['POST'])
def submit_address():
    data = request.json
    address = data.get('address')
    
    # Here you would typically process the address, maybe store it in a database
    # For this example, we'll just return it in the response
    return jsonify(message=f"Address received: {address}")

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
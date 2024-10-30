import json

# Cargar el archivo JSON
with open('./products.json', 'r') as file:
    data = json.load(file)

# Nueva URL para reemplazar
new_url = "https://www.printingpartners.net/wp-content/uploads/2022/03/Pink-Box-With-Full-Black-Inside-Luxury-Box-Maker.jpg"

# Iterar sobre cada producto y reemplazar URLs
for product in data['products']:
    product['thumbnail'] = new_url
    product['images'] = [new_url] * len(product['images'])

# Guardar los cambios en un nuevo archivo JSON
with open('./updated_products.json', 'w') as file:
    json.dump(data, file, indent=4)

print("URLs reemplazadas y archivo guardado como 'updated_products.json'")

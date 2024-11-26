import functions_framework
from google.cloud import firestore, storage

db = firestore.Client()
storage_client = storage.Client()

@functions_framework.cloud_event
def label_image_on_upload(event):
    # Get the image file name
    file_name = event["name"]
    label = get_even_or_odd_label(file_name)
    
    # Save the label in Firestore
    db.collection("image_labels").add({
        "image_name": file_name,
        "label": label,
        "timestamp": firestore.SERVER_TIMESTAMP
    })
    print(f"Image {file_name} labeled as {label}")

def get_even_or_odd_label(file_name):
    last_char = file_name[-1]
    if last_char.isdigit():
        num = int(last_char)
    elif last_char.isalpha():
        num = ord(last_char.lower()) - 96
    else:
        return "unknown"
    
    return "even" if num % 2 == 0 else "odd"

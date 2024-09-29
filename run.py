import os

# Specify the folder where you want to create the files
folder_path = 'dbms\\bank'

# Create files from question-028.md to question-046.md
for i in range(29, 47):
    file_name = f'question-{i:03}.md'
    file_path = os.path.join(folder_path, file_name)
    
    # Create and open the file in write mode
    with open(file_path, 'w') as file:
        file.write(
f'''---
title: Question-{i}
pagetitle: Question-{i}
categories: [DBMS]
---\n
<!-- Question and options here -->\n
::: {{.callout-note title="Answer" collapse=true}}\n
<!-- Answer here -->\n
:::\n
''')  # You can customize the content here

print("Files created successfully.")

with open('template.txt') as f:
    template = f.read()
for qno in range(1, 51):
    qid = str(qno).zfill(3)
    with open(f'bulk/question-{qid}.md', 'w') as f:
        f.write(template.format(qno = qno))

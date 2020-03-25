echo 'Post ong:'
curl --request POST 'localhost:3333/ongs' \
    --header 'Content-Type: application/json' \
    -d '{"name": "tes1", "email": "tes1@t.com", "phone": "+55 (21) 99553-5912", "City": "BarraRitz", "UF": "RJ"}'

echo && echo 'Get ongs:'
curl --request GET 'localhost:3333/ongs?pageSize=6'

echo && echo 'Post incidents:'
curl --request POST 'localhost:3333/incidents' \
    --header 'Ong-Id: 94f09eab' \
    --header 'Content-Type: application/json' \
    -d '{"title": "tes1", "description": "description tes1", "value": "5912"}'

echo && echo 'Get incidents:'
curl --request GET 'localhost:3333/incidents?page=0&pageSize=20'

echo && echo 'Get incidents by ong:'
curl --request GET 'localhost:3333/ongs/94f09eab/incidents'

echo && echo 'Delete incidents:'
curl --request DELETE 'localhost:3333/incidents/26' \
    --header 'Ong-Id: 8c3031fd'

echo

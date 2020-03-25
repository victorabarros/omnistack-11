echo 'Insert ong:'
curl --request POST 'localhost:3333/ongs' \
    --header 'Content-Type: application/json' \
    -d '{"name": "tes1", "email": "tes1@t.com", "phone": "+55 (21) 99553-5912", "City": "BarraRitz", "UF": "RJ"}'
echo && echo 'Select ongs:'
curl --request GET 'localhost:3333/ongs?pageSize=6'
echo && echo 'Insert incident:'
curl --request POST 'localhost:3333/incidents' \
    --header 'Ong-Id: 8c3031fd' \
    --header 'Content-Type: application/json' \
    -d '{"title": "tes1", "description": "description tes1", "value": "5912"}'
echo && echo 'Select incidents:'
curl --request GET 'localhost:3333/incidents?page=1&pageSize=6'
echo && echo 'Delete incidents:'
curl --request DELETE 'localhost:3333/incidents/7' \
    --header 'Ong-Id: 8c3031fd' \

echo

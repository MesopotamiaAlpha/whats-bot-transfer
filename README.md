# Gerenciador de atendimento por whats

Para instalaçaão da biblioteca
```
npm install venom-bot qrcode-terminal
```

Este projeto foi iniciado para gerenciar o atendimento ao cliente de uma agência de venda de passagens, o projeto foi descontinuado após o fechamento da agencia. Linhas com informações sensiveis foram retiradas. De momento não há intenções de finalização do projeto, caso houver atualizações irei registrar por aqui.

Este projeto foi desenvolvido usando javascript e a biblioteca venom-bot e qrcode-terminal.

A idéia do projeto é bem similar a varias outras soluções que existem no mercado, o passageiro iria chamar no whats app solicitando a compra de uma passagem, o sistema iria direcionar este passageiro para um atendente disponivel no momento e caso não tenha disponivel iria equilibrar a quantidade de atendimentos entre os operadores.

Neste momento o operador iria receber este atendimento no front dele mas o atendimento iria ser desenvolvido por parte de um bot, devolvendo horario de viajens, valores, origem e destino e poltronas disponiveis. Durante este processo o operador só estaria ali para conferir como está o andamento do atendiemento caso o cliente tenha alguma duvida muito especifica.

No final do atendimento pagamento seria um processo onde o operador de fato teria um ação manual.
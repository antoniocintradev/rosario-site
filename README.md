# Salmos e Orações — versão modernizada

Aplicativo estático para uso pessoal e familiar. Abra index.html para visualizar.
Não precisa instalar dependências nem executar build.

## Vercel
Importe antoniocintradev/rosario-site. Preset: Other. Pasta raiz do projeto.
Sem comando de build. Diretório de saída: raiz. Inclua assets/salmo-91.wav.
Esta entrega ainda não foi enviada ao GitHub nem publicada na Vercel.

## Conteúdo
Rosário por dia da semana, seleção de dias, Salmo 91 com o mix final,
controle nativo de reprodução e volume (conforme navegador), velocidade ajustável,
créditos ElevenLabs e canal Antonio Cintra. Não inicia música automaticamente.
A seleção do dia considera o relógio e o fuso do aparelho do visitante.

## Observações
O WAV foi preservado como fornecido, aproximadamente 20 MB. O arquivo original
externo e seus metadados não foram alterados. O uso de preload metadata reduz o
carregamento inicial em navegadores compatíveis. Depois podemos converter uma
cópia para MP3/AAC para reduzir a transferência.
A voz foi gerada no ElevenLabs Free: uso não comercial e atribuição no título
da seção e nos créditos. Esta versão não gera vozes nem coleta dados.
Não há login: hospedado publicamente, o site pode ser acessado por qualquer pessoa.
Os links externos e a referência bíblica foram preservados conforme fornecidos.
O original usa o mesmo vídeo para Gloriosos e Dolorosos; confirmar os links antes
de divulgação ampla. A recitação ainda não foi conferida com a edição Almeida 1911.

## Validação
Sintaxe JavaScript, seleção dos sete dias, velocidade e referências aos arquivos
verificadas automaticamente. Integridade da cópia WAV conferida por SHA-256.
A prévia no navegador não conectou ao servidor local; aparência e reprodução
real em celular ainda precisam de revisão. O arquivo index.htm legado foi
mantido no repositório; use index.html como entrada.

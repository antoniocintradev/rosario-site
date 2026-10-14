# Salmos e Orações

Um espaço de oração e escuta contemplativa, desenvolvido por **Antonio Cintra**
para uso pessoal e familiar.

Este projeto é a evolução do aplicativo **Mistérios do Rosário**. Mantém os
acessos às orações e acrescenta uma interface adaptada para celular e a recitação
do Salmo 91 com acompanhamento instrumental.

## Funcionalidades

- Mistérios do Rosário indicados conforme o dia da semana.
- Seleção de qualquer dia para consultar seus mistérios.
- Links para os vídeos do Frei Gilson / Som do Monte.
- Salmo 91 com controles de reprodução, pausa e avanço pelo áudio.
- Ritmo de reprodução ajustável: 0,85×, 1× e 1,15×.
- Acesso direto à Coroa das Lágrimas de Nossa Senhora - Oração, no YouTube.
- Link para o canal de Antonio Cintra no YouTube.
- Layout responsivo e créditos da produção disponíveis na página.

O áudio começa somente após uma ação do visitante. Os controles de volume
dependem do navegador; em celulares, o volume pode ser controlado pelo aparelho.
A velocidade escolhida altera a voz e a música juntas. O dia indicado usa a
data e o fuso do dispositivo do visitante.

## Tecnologias

HTML, CSS e JavaScript, sem framework, instalação de dependências ou etapa de
compilação. O áudio é servido como arquivo estático.

## Estrutura

```text
rosario-site/
├── index.html          # Página principal
├── style.css           # Estilos e layout responsivo
├── app.js              # Seleção de dias e controles adicionais
├── assets/
│   └── salmo-91.wav    # Recitação com acompanhamento instrumental
└── README.md
```

O arquivo legado `index.htm`, se presente, pertence à versão anterior.
A entrada desta versão é `index.html`.

## Como visualizar

Baixe ou clone o repositório e abra `index.html` no navegador, mantendo a
estrutura de pastas. Para visualizar com um servidor local, caso tenha Python:

```bash
python -m http.server 8000
```

Execute na raiz do projeto e abra `http://localhost:8000`.

## Publicação na Vercel

Use o repositório [antoniocintradev/rosario-site](https://github.com/antoniocintradev/rosario-site).
Para uma configuração de site estático:

| Configuração     | Valor                 |
| ---------------- | --------------------- |
| Framework Preset | Other                 |
| Root Directory   | Raiz do repositório   |
| Build Command    | Sem comando de build  |
| Output Directory | `.` — raiz do projeto |

Inclua a pasta `assets` na publicação. Se a integração automática estiver ativa,
os commits na branch de produção configurada na Vercel iniciam novas implantações.

O WAV tem aproximadamente 20 MB. A página solicita inicialmente os metadados
do áudio; o comportamento de transferência depende do navegador. Uma futura
versão pode usar MP3 ou AAC para reduzir o tamanho.

## Créditos

**Direção criativa, edição e mixagem:** Antonio Cintra.

**Trilha instrumental:** Gerador_Trilha / App Lab, desenvolvida com Python e
finalizada com instrumentos no REAPER.

**Narração:** voz sintética gerada com [ElevenLabs](https://elevenlabs.io), no
plano Free, com ajuste de ritmo durante a produção. Não é uma gravação de um
narrador humano lendo o Salmo.

**Referência bíblica informada pelo produtor:** Bíblia Sagrada, tradução de
João Ferreira d’Almeida, Lisboa, 1911. A página não reproduz a transcrição.

**Conteúdos externos:** Frei Gilson / Som do Monte e Déia e Tiba. Os links
direcionam aos canais e vídeos de seus respectivos responsáveis; não indicam
parceria ou endosso ao aplicativo.



## Uso e privacidade

Esta edição foi preparada para **uso pessoal e não comercial**. O áudio gerado
no ElevenLabs Free está sujeito às condições desse serviço e mantém atribuição
na seção de reprodução e nos créditos. Não há concessão de licença comercial
para reutilizar a gravação. Consulte as
[condições de publicação do ElevenLabs](https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform).

O aplicativo não possui cadastro, formulários, cookies próprios ou ferramentas
de análise de visitantes. A hospedagem e os serviços externos acessados por
links têm suas próprias práticas de privacidade. Não há login ou restrição de
acesso: um site público pode ser visitado por qualquer pessoa com o endereço.

## Estado da versão e próximas melhorias

A sintaxe JavaScript, a seleção dos sete dias, o ajuste de velocidade e as
referências aos arquivos passaram por verificações automáticas. A integridade
da cópia do WAV foi conferida por SHA-256.

A revisão visual e a reprodução real em celulares ainda estão pendentes, pois
a prévia no navegador não conseguiu acessar o servidor local nesta sessão.
Também precisam ser conferidos:

- Os links dos mistérios Gloriosos e Dolorosos: o original utiliza o mesmo vídeo.
- A correspondência da recitação com a edição bíblica informada.
- As condições dos instrumentos e recursos usados antes de qualquer uso comercial.

Como evolução, estão previstos áudio mais leve, revisão dos links e novas
recitações, mantendo a proposta simples de oração em família.



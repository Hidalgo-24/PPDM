# Relatório do projeto BeatFlow

## Nome do app
BeatFlow

## Tema
Aplicativo mobile de streaming de música inspirado em plataformas como Spotify e Deezer, mas com identidade própria.

## Paleta de cores
- Fundo: `#0D0B1E`
- Superfície/cards: `#17142D`
- Roxo principal: `#7C3AED`
- Azul ciano de destaque: `#22D3EE`
- Texto principal: `#FFFFFF`
- Texto secundário: `#B9B5D9`

## Público-alvo
Jovens e estudantes que querem ouvir músicas, descobrir playlists e salvar faixas favoritas.

## Função das telas

### Login
Permite o acesso ao app. Valida se o e-mail possui `@` e se a senha tem no mínimo 4 caracteres.

### Cadastro
Recebe nome, e-mail, senha e confirmação de senha. Valida campos básicos e permite voltar ao login.

### Tela inicial
Mostra saudação, playlist em destaque e lista de 8 músicas mockadas.

### Favoritos
Mostra apenas músicas marcadas com coração.

### Tocando música
Exibe capa simbólica, título, artista, álbum, duração, indicador de progresso, botões visuais de controle e botão de favorito.

## Componentes reaproveitados
- `AppButton`: botão padrão do aplicativo.
- `FormInput`: campo de formulário com label.
- `MusicCard`: card de música usado na tela inicial e favoritos.

## Dados simulados
As músicas estão no arquivo `src/data/musicas.ts`.

## Fluxo de navegação
Login → Cadastro → Login → Home → Favoritos → Player.
A tela inicial também abre diretamente a tela Player ao tocar em uma música.

## Testes realizados
- Login com e-mail inválido.
- Login com senha curta.
- Cadastro com senhas diferentes.
- Cadastro válido retornando para login.
- Abertura da tela inicial após login válido.
- Abrir música na tela de reprodução.
- Favoritar e desfavoritar músicas.
- Ver lista de favoritos.

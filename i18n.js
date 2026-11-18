// Translations. The page is written in English; pt/es swap in by matching the English text exactly.
// Edit an English text in index.html? Update its key here too, or that spot stays in English.
// Language: ?lang= in the URL, then the EN/PT/ES button the visitor picked, then the browser language.
const I18N = {
  "Maps": ["Mapas", "Mapas"],
  "Tournaments": ["Torneios", "Torneos"],
  "How to play": ["Como jogar", "Cómo jugar"],
  "FAQ": ["Dúvidas", "Preguntas"],
  "Play": ["Jogar", "Jugar"],
  "Play now": ["Jogar agora", "Jugar ahora"],
  "Language": ["Idioma", "Idioma"],
  "Classic Stumble Guys never left.": ["O Stumble Guys clássico nunca foi embora.", "El Stumble Guys clásico nunca se fue."],
  "The biggest classic Stumble Guys server. The 0.56 maps you grew up on, plus Mini Ranked, custom skins and weekly tournaments.": ["O maior servidor de Stumble Guys clássico. Os mapas da 0.56 que marcaram sua infância, mais Mini Ranked, skins exclusivas e torneios toda semana.", "El servidor de Stumble Guys clásico más grande. Los mapas de la 0.56 con los que creciste, además de Mini Ranked, skins exclusivas y torneos cada semana."],
  "online on Discord": ["online no Discord", "en línea en Discord"],
  "Game screens": ["Telas do jogo", "Pantallas del juego"],
  "The maps you remember": ["Os mapas que você lembra", "Los mapas que recuerdas"],
  "Every classic 0.56 map, plus maps from newer versions and one we built ourselves.": ["Todos os mapas clássicos da 0.56, mais mapas de versões mais novas e um que nós mesmos criamos.", "Todos los mapas clásicos de la 0.56, más mapas de versiones más nuevas y uno que creamos nosotros."],
  "RACE": ["CORRIDA", "CARRERA"],
  "Most maps play exactly like they did in 0.56. A few were tuned with <b>0.100+ physics</b> for the race community.": ["A maioria dos mapas joga exatamente como na 0.56. Alguns foram ajustados com a <b>física da 0.100+</b> para a comunidade de corrida.", "La mayoría de los mapas se juegan igual que en la 0.56. Algunos se ajustaron con la <b>física de la 0.100+</b> para la comunidad de carreras."],
  "Only on Stumble Cups": ["Só no Stumble Cups", "Solo en Stumble Cups"],
  "All of this is in the game right now. Every screen below is the game's own UI.": ["Tudo isso já está no jogo. Todas as telas abaixo são da própria interface do jogo.", "Todo esto ya está en el juego. Todas las pantallas de abajo son de la propia interfaz del juego."],
  "NEW MODE": ["MODO NOVO", "MODO NUEVO"],
  "Queue 1v1, 2v2 or 3v3 and play for ELO. Climb the LT and HT tiers, keep your win streak going, and come back tomorrow for a new set of maps. Every season ends with rewards.": ["Entre na fila de 1v1, 2v2 ou 3v3 e jogue valendo ELO. Suba pelos tiers LT e HT, mantenha sua sequência de vitórias e volte amanhã para um novo conjunto de mapas. Toda temporada termina com recompensas.", "Entra a la cola de 1v1, 2v2 o 3v3 y juega por ELO. Sube por los tiers LT y HT, mantén tu racha de victorias y vuelve mañana para un nuevo set de mapas. Cada temporada termina con recompensas."],
  "IN-GAME": ["NO JOGO", "EN EL JUEGO"],
  "Leaderboard": ["Ranking", "Clasificación"],
  "NEW": ["NOVO", "NUEVO"],
  "Replay mode": ["Modo replay", "Modo repetición"],
  "Your matches are saved on your device, up to the last 20. Open one from the lobby and watch it back: pause, jump 5 seconds, play from 0.5x up to 4x, hide the HUD or fly a free camera around the map.": ["Suas partidas ficam salvas no seu aparelho, até as últimas 20. Abra uma pelo lobby e assista de novo: pause, pule 5 segundos, assista de 0.5x até 4x, esconda o HUD ou voe com a câmera livre pelo mapa.", "Tus partidas se guardan en tu dispositivo, hasta las últimas 20. Abre una desde el lobby y mírala otra vez: pausa, salta 5 segundos, reprodúcela de 0.5x hasta 4x, oculta el HUD o vuela con la cámara libre por el mapa."],
  "Your replays": ["Seus replays", "Tus repeticiones"],
  "Watching": ["Assistindo", "Viendo"],
  "CUSTOM ROOMS": ["SALAS PERSONALIZADAS", "SALAS PERSONALIZADAS"],
  "Rooms, your rules": ["Sua sala, suas regras", "Tu sala, tus reglas"],
  "Hosting a custom party? Pick the map for each round, choose how many players can join, then change the modifiers. Each round can also get its own map options, like faster blocks or endless waves in Block Dash and Cups Dash. Set it to 1 player and the room runs as offline mode, so you can practice on your own.": ["Vai criar uma sala personalizada? Escolha o mapa de cada rodada, quantos jogadores podem entrar e mude os modificadores. Cada rodada também pode ter suas próprias opções de mapa, como blocos mais rápidos ou ondas infinitas no Block Dash e no Cups Dash. Coloque 1 jogador e a sala vira modo offline, para você treinar sozinho.", "¿Vas a crear una sala personalizada? Elige el mapa de cada ronda, cuántos jugadores pueden entrar y cambia los modificadores. Cada ronda también puede tener sus propias opciones de mapa, como bloques más rápidos u oleadas infinitas en Block Dash y Cups Dash. Ponla en 1 jugador y la sala funciona como modo offline, para que practiques solo."],
  "Qualify": ["Classificados", "Clasificados"],
  "Round Time": ["Tempo da rodada", "Tiempo de ronda"],
  "Lives": ["Vidas", "Vidas"],
  "Respawn delay": ["Tempo de respawn", "Tiempo de reaparición"],
  "Start Countdown": ["Contagem inicial", "Cuenta regresiva"],
  "Random Spawns": ["Spawns aleatórios", "Apariciones aleatorias"],
  "Speed": ["Velocidade", "Velocidad"],
  "Jump": ["Pulo", "Salto"],
  "Gravity": ["Gravidade", "Gravedad"],
  "Dive": ["Mergulho", "Clavado"],
  "Dive Recharge": ["Recarga do mergulho", "Recarga del clavado"],
  "Collision": ["Colisão", "Colisión"],
  "Hit Force": ["Força do golpe", "Fuerza del golpe"],
  "Knockdown": ["Derrubada", "Derribo"],
  "Emote Cooldown": ["Recarga de emote", "Recarga de emote"],
  "Infinite Respawn": ["Respawn infinito", "Reaparición infinita"],
  "Special Emotes": ["Emotes especiais", "Emotes especiales"],
  "Modifiers": ["Modificadores", "Modificadores"],
  "Round options": ["Opções da rodada", "Opciones de ronda"],
  "WATCH LIVE": ["AO VIVO", "EN VIVO"],
  "Spectate your friends": ["Assista seus amigos", "Mira a tus amigos"],
  "Watch trusted friends live in ranked and classic matches, or drop into a friend's custom room. Tournament matches can be watched live too, and players see how many people are watching.": ["Assista ao vivo amigos de confiança em partidas ranqueadas e clássicas, ou entre na sala personalizada de um amigo. Partidas de torneio também podem ser assistidas ao vivo, e os jogadores veem quantas pessoas estão assistindo.", "Mira en vivo a tus amigos de confianza en partidas ranked y clásicas, o entra a la sala personalizada de un amigo. Las partidas de torneo también se pueden ver en vivo, y los jugadores ven cuántas personas están mirando."],
  "SQUAD UP": ["MONTE SEU TIME", "ARMA TU EQUIPO"],
  "Clans": ["Clãs", "Clanes"],
  "Create or join a clan, pick one of five badges and make it public or private. Chat with your clan, see who's online and what they're playing, and climb the clan leaderboard with tournament wins. Clan Wars is coming soon.": ["Crie ou entre em um clã, escolha um de cinco emblemas e deixe ele público ou privado. Converse com seu clã, veja quem está online e o que está jogando, e suba no ranking de clãs com vitórias em torneios. A Guerra de Clãs chega em breve.", "Crea o únete a un clan, elige una de cinco insignias y hazlo público o privado. Chatea con tu clan, mira quién está en línea y a qué está jugando, y sube en la clasificación de clanes con victorias en torneos. Las Guerras de Clanes llegan pronto."],
  "Clan": ["Clã", "Clan"],
  "Ranking": ["Ranking", "Clasificación"],
  "EVERY WEEK": ["TODA SEMANA", "CADA SEMANA"],
  "Best of 3 brackets in 1v1, 2v2 and 4v4, live invites and updates in game, and a clan leaderboard for the most tournament wins. Every tournament gets announced on Discord the moment it opens.": ["Chaves melhor de 3 em 1v1, 2v2 e 4v4, convites e atualizações ao vivo no jogo, e um ranking de clãs por vitórias em torneios. Todo torneio é anunciado no Discord assim que abre.", "Llaves al mejor de 3 en 1v1, 2v2 y 4v4, invitaciones y novedades en vivo dentro del juego, y una clasificación de clanes por victorias en torneos. Cada torneo se anuncia en Discord en cuanto abre."],
  "Upcoming": ["Próximos", "Próximos"],
  "OUR MAP": ["NOSSO MAPA", "NUESTRO MAPA"],
  "A map we built from scratch. Dodge hand-made block waves, survive a 30-second super labyrinth, and if you're still standing after 5 minutes, the Impossible tier kicks in.": ["Um mapa que criamos do zero. Desvie de ondas de blocos feitas à mão, sobreviva a um super labirinto de 30 segundos e, se ainda estiver de pé depois de 5 minutos, começa o nível Impossível.", "Un mapa que creamos desde cero. Esquiva oleadas de bloques hechas a mano, sobrevive a un súper laberinto de 30 segundos y, si sigues en pie después de 5 minutos, empieza el nivel Imposible."],
  "ONLY HERE": ["SÓ AQUI", "SOLO AQUÍ"],
  "Custom skins and emotes": ["Skins e emotes exclusivos", "Skins y emotes exclusivos"],
  "Skins you won't find in any other version, plus our own dances like Trackmaker, Jeyke Funk and Jamal Dance, each with its own music.": ["Skins que você não acha em nenhuma outra versão, mais danças nossas como Trackmaker, Jeyke Funk e Jamal Dance, cada uma com sua própria música.", "Skins que no vas a encontrar en ninguna otra versión, más bailes propios como Trackmaker, Jeyke Funk y Jamal Dance, cada uno con su propia música."],
  "NEW DANCES": ["DANÇAS NOVAS", "BAILES NUEVOS"],
  "More in Stumble Cups": ["Mais no Stumble Cups", "Más en Stumble Cups"],
  "Skin upgrader": ["Upgrade de skin", "Mejorador de skins"],
  "Put in a skin you own, pick the one you want and spin. The more yours is worth, the better the odds.": ["Coloque uma skin que você tem, escolha a que você quer e gire. Quanto mais a sua vale, maiores as chances.", "Pon una skin que tengas, elige la que quieres y gira. Cuanto más valga la tuya, mejores son las probabilidades."],
  "Gifts": ["Presentes", "Regalos"],
  "Send skins to your friends with a message, and claim the ones they send you from your gifts inbox.": ["Mande skins para seus amigos com uma mensagem e resgate as que eles te mandarem na sua caixa de presentes.", "Envía skins a tus amigos con un mensaje y reclama las que te envíen desde tu bandeja de regalos."],
  "75 levels you unlock by playing. The free track gives gems, tokens and skins. The Cups Pass adds a reward on every level, with an exclusive skin every 15 levels.": ["75 níveis que você desbloqueia jogando. A trilha grátis dá gemas, tokens e skins. O Cups Pass adiciona uma recompensa em todo nível, com uma skin exclusiva a cada 15 níveis.", "75 niveles que desbloqueas jugando. La ruta gratis da gemas, tokens y skins. El Cups Pass añade una recompensa en cada nivel, con una skin exclusiva cada 15 niveles."],
  "Name tags": ["Tags de nome", "Etiquetas de nombre"],
  "Creator tags like [PRO], [BOSS], [GOAT] and [OG], animated name effects and country flag footsteps. Turn each one on or off.": ["Tags de criador como [PRO], [BOSS], [GOAT] e [OG], efeitos animados no nome e pegadas com a bandeira do seu país. Ative ou desative cada um.", "Etiquetas de creador como [PRO], [BOSS], [GOAT] y [OG], efectos animados en el nombre y huellas con la bandera de tu país. Activa o desactiva cada una."],
  "And a lot more": ["E muito mais", "Y mucho más"],
  "Offline mode": ["Modo offline", "Modo offline"],
  "Any skin color with the Pass": ["Qualquer cor de skin com o Pass", "Cualquier color de skin con el Pass"],
  "Teammate arrow": ["Seta do parceiro de time", "Flecha de compañero"],
  "Log in with Discord": ["Login com Discord", "Inicia sesión con Discord"],
  "Japanese, Korean & Chinese names": ["Nomes em japonês, coreano e chinês", "Nombres en japonés, coreano y chino"],
  "Runs better than the original": ["Roda melhor que o original", "Corre mejor que el original"],
  "<b>Lower input delay</b> and smoother movement for everyone else in the match.": ["<b>Menos input delay</b> e movimento mais suave dos outros jogadores na partida.", "<b>Menos input delay</b> y movimiento más fluido de los demás jugadores en la partida."],
  "<b>Full refresh rate on phones.</b> 90 and 120 Hz screens run at full speed, and PC can go unlimited.": ["<b>Taxa de atualização total no celular.</b> Telas de 90 e 120 Hz rodam na velocidade máxima, e no PC dá para deixar ilimitado.", "<b>Tasa de refresco completa en el celular.</b> Las pantallas de 90 y 120 Hz van a máxima velocidad, y en PC puede ser ilimitado."],
  "<b>Less memory.</b> Skins only load what's on screen.": ["<b>Menos memória.</b> As skins só carregam o que aparece na tela.", "<b>Menos memoria.</b> Las skins solo cargan lo que está en pantalla."],
  "<b>Fewer stutters</b> mid-match and faster match loading.": ["<b>Menos travadas</b> no meio da partida e carregamento mais rápido.", "<b>Menos tirones</b> en mitad de la partida y carga más rápida."],
  "<b>Potato Mode.</b> Flat, simple graphics. Turn it on if that's how you like to play.": ["<b>Potato Mode.</b> Gráficos simples e sem detalhes. Ative se você curte jogar assim.", "<b>Potato Mode.</b> Gráficos simples y planos. Actívalo si te gusta jugar así."],
  "<b>Settings for everyone.</b> Unlimited FPS, Show FPS, motion blur and Screen Edge for notches.": ["<b>Configurações para todo mundo.</b> FPS ilimitado, mostrar FPS, motion blur e Screen Edge para telas com notch.", "<b>Ajustes para todos.</b> FPS ilimitados, mostrar FPS, motion blur y Screen Edge para pantallas con notch."],
  "How to get in": ["Como entrar", "Cómo entrar"],
  "Pick your device and download. No need to dig through the Discord for a link.": ["Escolha sua plataforma e faça o download direto daqui, sem precisar procurar o link no Discord.", "Elige tu dispositivo y descarga. Sin tener que buscar el link en Discord."],
  "File": ["Arquivo", "Archivo"],
  "Game folder": ["Pasta do jogo", "Carpeta del juego"],
  "Size": ["Tamanho", "Tamaño"],
  "Version": ["Versão", "Versión"],
  "Download": ["Baixar", "Descargar"],
  "Extract the folder before running.": ["Extraia a pasta antes de abrir o jogo.", "Extrae la carpeta antes de abrir el juego."],
  "Stumble Guys 0.56 build · Updated": ["Build do Stumble Guys 0.56 · Atualizado em", "Build de Stumble Guys 0.56 · Actualizado el"],
  "Need a hand? Our <a href=\"https://discord.gg/cups\" target=\"_blank\" rel=\"noopener\">Discord</a> is always there to help.": ["Precisa de ajuda? Nosso <a href=\"https://discord.gg/cups\" target=\"_blank\" rel=\"noopener\">Discord</a> está sempre aí para te ajudar.", "¿Necesitas ayuda? Nuestro <a href=\"https://discord.gg/cups\" target=\"_blank\" rel=\"noopener\">Discord</a> siempre está para ayudarte."],
  "Stuck on the download link? Here's how to get through it": ["Travou no link de download? Veja como passar", "¿Te trabaste en el link de descarga? Así se pasa"],
  "Tap Get access": ["Toque em Get access", "Toca Get access"],
  "The Download button opens our page on Linkvertise. If a new tab with an ad pops up, close it and come back.": ["O botão Baixar abre nossa página no Linkvertise. Se abrir uma aba nova com anúncio, feche e volte.", "El botón Descargar abre nuestra página en Linkvertise. Si se abre una pestaña nueva con un anuncio, ciérrala y vuelve."],
  "Pick Watch Ads, then Continue": ["Escolha Watch Ads e depois Continue", "Elige Watch Ads y luego Continue"],
  "Skip the \"2 Days Trial\" and the paid plans. They ask for a card. Watching the ads is free.": ["Pule o \"2 Days Trial\" e os planos pagos. Eles pedem cartão. Assistir os anúncios é grátis.", "Sáltate el \"2 Days Trial\" y los planes pagos. Piden tarjeta. Ver los anuncios es gratis."],
  "Wait for Skip Ad, three times": ["Espere o Skip Ad, três vezes", "Espera el Skip Ad, tres veces"],
  "After a few seconds a <b>Skip Ad</b> button shows up in the corner of the ad. There are 3 ads. You don't need to install anything they offer.": ["Depois de alguns segundos, aparece um botão <b>Skip Ad</b> no canto do anúncio. São 3 anúncios. Você não precisa instalar nada do que eles oferecem.", "Después de unos segundos aparece un botón <b>Skip Ad</b> en la esquina del anuncio. Son 3 anuncios. No necesitas instalar nada de lo que ofrecen."],
  "Tap Open here": ["Toque em Open here", "Toca Open here"],
  "When you see <b>\"Your content is ready!\"</b>, tap <b>Open here</b>. It takes you to the download site (MediaFire, MEGA or another host). Hit the download button there to grab the file.": ["Quando aparecer <b>\"Your content is ready!\"</b>, toque em <b>Open here</b>. Ele leva para o site de download (MediaFire, MEGA ou outro). Lá, aperte o botão de download para baixar o arquivo.", "Cuando veas <b>\"Your content is ready!\"</b>, toca <b>Open here</b>. Te lleva al sitio de descarga (MediaFire, MEGA u otro). Ahí, presiona el botón de descarga para bajar el archivo."],
  "Still stuck? Try another browser, turn off your ad blocker for that page, or ask for help on our <a href=\"https://discord.gg/cups\" target=\"_blank\" rel=\"noopener\">Discord</a>.": ["Ainda travado? Tente outro navegador, desative o bloqueador de anúncios nessa página ou peça ajuda no nosso <a href=\"https://discord.gg/cups\" target=\"_blank\" rel=\"noopener\">Discord</a>.", "¿Sigues trabado? Prueba otro navegador, desactiva el bloqueador de anuncios en esa página o pide ayuda en nuestro <a href=\"https://discord.gg/cups\" target=\"_blank\" rel=\"noopener\">Discord</a>."],
  "Servers in": ["Servidores em", "Servidores en"],
  "South America": ["América do Sul", "Sudamérica"],
  "United States": ["Estados Unidos", "Estados Unidos"],
  "Europe": ["Europa", "Europa"],
  "Asia": ["Ásia", "Asia"],
  "Got questions?": ["Ficou com dúvida?", "¿Tienes preguntas?"],
  "I'm an official Stumble Guys content creator. Can I play Stumble Cups?": ["Sou criador de conteúdo oficial do Stumble Guys. Posso jogar Stumble Cups?", "Soy creador de contenido oficial de Stumble Guys. ¿Puedo jugar Stumble Cups?"],
  "Yes, go for it. Play it, stream it, make videos about it. Stumble Cups is a classic version of Stumble Guys running on its own servers. It's not a hack, and it doesn't touch the official game or your official account.": ["Pode sim. Jogue, faça live, grave vídeos. O Stumble Cups é uma versão clássica do Stumble Guys rodando em servidores próprios. Não é hack, e não mexe no jogo oficial nem na sua conta oficial.", "Sí, adelante. Juégalo, haz streams, sube videos. Stumble Cups es una versión clásica de Stumble Guys con sus propios servidores. No es un hack, y no toca el juego oficial ni tu cuenta oficial."],
  "Is Stumble Cups a hack or a cheat?": ["O Stumble Cups é hack ou trapaça?", "¿Stumble Cups es un hack o un cheat?"],
  "No. There are no injectors, mod menus or cheats involved. Stumble Cups is a full classic build of the game, with its own servers and its own accounts, completely separate from the official Stumble Guys.": ["Não. Não tem injetor, mod menu nem cheat nenhum. O Stumble Cups é uma build clássica completa do jogo, com servidores e contas próprios, totalmente separada do Stumble Guys oficial.", "No. No hay inyectores, mod menus ni cheats. Stumble Cups es una build clásica completa del juego, con sus propios servidores y cuentas, totalmente separada del Stumble Guys oficial."],
  "Do I need my Stumble Guys account?": ["Preciso da minha conta do Stumble Guys?", "¿Necesito mi cuenta de Stumble Guys?"],
  "No. Stumble Cups has its own accounts, separate from the official game. Nothing you do here affects your official progress.": ["Não. O Stumble Cups tem contas próprias, separadas do jogo oficial. Nada do que você faz aqui afeta seu progresso oficial.", "No. Stumble Cups tiene sus propias cuentas, separadas del juego oficial. Nada de lo que hagas aquí afecta tu progreso oficial."],
  "What can I play on?": ["Em quais aparelhos posso jogar?", "¿En qué puedo jugar?"],
  "PC, Android and iOS. Download it right here in <a href=\"#play\">How to get in</a>, and if you get stuck, the Discord has support.": ["PC, Android e iOS. Baixe aqui mesmo em <a href=\"#play\">Como entrar</a> e, se travar, o Discord tem suporte.", "PC, Android y iOS. Descárgalo aquí mismo en <a href=\"#play\">Cómo entrar</a> y, si te trabas, el Discord tiene soporte."],
  "Where are the servers?": ["Onde ficam os servidores?", "¿Dónde están los servidores?"],
  "South America, United States, Europe and Asia. Pick the one closest to you for the lowest ping.": ["América do Sul, Estados Unidos, Europa e Ásia. Escolha o mais perto de você para ter o menor ping.", "Sudamérica, Estados Unidos, Europa y Asia. Elige el más cercano para tener el menor ping."],
  "Is this official?": ["Isso é oficial?", "¿Es oficial?"],
  "No. Stumble Cups is an unofficial fan project made by the community. It isn't affiliated with Scopely or Kitka Games.": ["Não. O Stumble Cups é um projeto não oficial, feito por fãs da comunidade. Não tem ligação com a Scopely nem com a Kitka Games.", "No. Stumble Cups es un proyecto no oficial hecho por fans de la comunidad. No está afiliado a Scopely ni a Kitka Games."],
  "The team behind the cups": ["O time por trás do Cups", "El equipo detrás de Cups"],
  "© 2026 Stumble Cups. Stumble Cups is an unofficial fan project. It is not affiliated with, endorsed by, or sponsored by Scopely or Kitka Games. <i>Stumble Guys</i> and all related assets are trademarks of their respective owners.": ["© 2026 Stumble Cups. O Stumble Cups é um projeto não oficial feito por fãs. Não é afiliado, endossado nem patrocinado pela Scopely ou pela Kitka Games. <i>Stumble Guys</i> e todos os assets relacionados são marcas de seus respectivos donos.", "© 2026 Stumble Cups. Stumble Cups es un proyecto no oficial hecho por fans. No está afiliado, respaldado ni patrocinado por Scopely ni Kitka Games. <i>Stumble Guys</i> y todos los recursos relacionados son marcas de sus respectivos dueños."],
  "Mini Ranked lobby with today's maps and your ELO": ["Lobby do Mini Ranked com os mapas do dia e seu ELO", "Lobby de Mini Ranked con los mapas del día y tu ELO"],
  "Mini Ranked leaderboard with ELO and win streaks": ["Ranking do Mini Ranked com ELO e sequências de vitórias", "Clasificación de Mini Ranked con ELO y rachas de victorias"],
  "List of saved replays": ["Lista de replays salvos", "Lista de repeticiones guardadas"],
  "Replay player with the timeline, speeds and Follow or Free Cam": ["Player de replay com a linha do tempo, velocidades e câmera Follow ou Free Cam", "Reproductor de repeticiones con la línea de tiempo, velocidades y cámara Follow o Free Cam"],
  "Custom party modifiers": ["Modificadores da sala personalizada", "Modificadores de la sala personalizada"],
  "Custom party with three rounds and the modifiers list": ["Sala personalizada com três rodadas e a lista de modificadores", "Sala personalizada con tres rondas y la lista de modificadores"],
  "Cups Dash options for one round: block speed, start difficulty and endless": ["Opções do Cups Dash para uma rodada: velocidade dos blocos, dificuldade inicial e modo infinito", "Opciones de Cups Dash para una ronda: velocidad de bloques, dificultad inicial y modo infinito"],
  "Friends list with Spectate buttons for friends in a match": ["Lista de amigos com botões para assistir quem está em partida", "Lista de amigos con botones para ver a los que están en partida"],
  "Clan info and members": ["Informações e membros do clã", "Información y miembros del clan"],
  "Clan chat": ["Chat do clã", "Chat del clan"],
  "Clan leaderboard by tournament wins": ["Ranking de clãs por vitórias em torneios", "Clasificación de clanes por victorias en torneos"],
  "Cups Dash in game, with spiked block waves coming at the player": ["Cups Dash no jogo, com ondas de blocos com espinhos vindo na direção do jogador", "Cups Dash en el juego, con oleadas de bloques con pinchos yendo hacia el jugador"],
  "Skin upgrader with the chance wheel": ["Upgrade de skin com a roleta de chances", "Mejorador de skins con la ruleta de probabilidades"],
  "Gifts inbox": ["Caixa de presentes", "Bandeja de regalos"],
  "Cups Pass track at level 13, with the free and Cups Pass rows and the exclusive Toxic Boxer skin at level 15": ["Trilha do Cups Pass no nível 13, com as fileiras grátis e do Cups Pass e a skin exclusiva Toxic Boxer no nível 15", "Ruta del Cups Pass en el nivel 13, con las filas gratis y del Cups Pass y la skin exclusiva Toxic Boxer en el nivel 15"],
  "Name tags popup": ["Janela de tags de nome", "Ventana de etiquetas de nombre"],
  "Graphics settings with FPS Limit set to Unlimited and Potato Mode": ["Configurações gráficas com limite de FPS em ilimitado e Potato Mode", "Ajustes gráficos con el límite de FPS en ilimitado y Potato Mode"],
  "Download page with the Get access button circled": ["Página de download com o botão Get access circulado", "Página de descarga con el botón Get access marcado"],
  "Access options with Watch Ads and Continue circled and the paid plans crossed out": ["Opções de acesso com Watch Ads e Continue circulados e os planos pagos riscados", "Opciones de acceso con Watch Ads y Continue marcados y los planes pagos tachados"],
  "An ad with the Skip Ad button circled and the install button crossed out": ["Anúncio com o botão Skip Ad circulado e o botão de instalar riscado", "Anuncio con el botón Skip Ad marcado y el botón de instalar tachado"],
  "Final screen with the Open here button circled": ["Tela final com o botão Open here circulado", "Pantalla final con el botón Open here marcado"],
  "Stumble Cups: the biggest classic Stumble Guys server": ["Stumble Cups: o maior servidor de Stumble Guys clássico", "Stumble Cups: el servidor de Stumble Guys clásico más grande"],
  "<b>Heads up:</b> Stumble Cups 0.56 is still in development. Expect bugs and the occasional server issue while we work on it.": ["<b>Aviso:</b> o Stumble Cups 0.56 ainda está em desenvolvimento. Bugs e instabilidades nos servidores podem acontecer enquanto a gente trabalha nele.", "<b>Aviso:</b> Stumble Cups 0.56 sigue en desarrollo. Pueden aparecer bugs y fallas en los servidores mientras trabajamos en él."],
};

(() => {
  const LANGS = ['en', 'pt', 'es'];
  const q = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch {}
  const browser = (navigator.languages || [navigator.language]).map(l => String(l).slice(0, 2).toLowerCase());
  const lang = [q, saved, ...browser].find(l => LANGS.includes(l)) || 'en';

  document.querySelectorAll('.lang button').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.l === lang);
    b.addEventListener('click', () => {
      try { localStorage.setItem('lang', b.dataset.l); } catch {}
      const u = new URL(location.href);
      u.searchParams.set('lang', b.dataset.l);
      location.href = u;
    });
  });
  if (lang === 'en') return;

  const k = lang === 'pt' ? 0 : 1, tr = s => (I18N[s] || [])[k];
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es';
  document.title = tr(document.title) || document.title;
  // sentences with <b>/<a>/<i> inside swap whole, so the word order can change; then loose text and attributes
  document.querySelectorAll('p, li').forEach(el => { const t = tr(el.innerHTML.trim()); if (t) el.innerHTML = t; });
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = w.nextNode());) { const s = n.nodeValue.trim(), t = s && tr(s); if (t) n.nodeValue = n.nodeValue.replace(s, () => t); }
  document.querySelectorAll('[alt], [aria-label], [data-alt]').forEach(e => ['alt', 'aria-label', 'data-alt'].forEach(a => {
    const t = e.hasAttribute(a) && tr(e.getAttribute(a)); if (t) e.setAttribute(a, t);
  }));
  document.querySelectorAll('time[datetime]').forEach(t => { t.textContent = new Date(t.dateTime + 'T12:00').toLocaleDateString(document.documentElement.lang, { dateStyle: 'long' }); });
})();

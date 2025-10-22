# Prolins IA - Landing Page

![Prolins IA](https://img.shields.io/badge/Prolins-IA-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Landing page oficial da **Prolins IA** - Plataforma de atendimento inteligente, personalizado e integrado com inteligência artificial avançada.

## 📋 Sobre o Projeto

A Prolins oferece soluções de atendimento ao cliente baseadas em inteligência artificial, permitindo que empresas transformem seu atendimento com agentes de IA sob medida. A plataforma oferece integração com diversos canais de comunicação (WhatsApp, Instagram, Webchat) e sistemas empresariais.

### 🎯 Principais Funcionalidades

- **Atendimento 24/7**: Disponibilidade contínua em múltiplos canais
- **IA Avançada**: Compreensão de áudios e mensagens complexas com linguagem natural
- **Integração Total**: APIs, bancos de dados, sistemas de pagamento e plataformas internas
- **Relatórios Inteligentes**: Dashboards e métricas em tempo real
- **Integração com Prochat**: Plataforma completa de atendimento ao cliente

### 🏢 Setores Atendidos

- Clínicas e Consultórios
- Restaurantes e Delivery
- Supermercados
- Hotéis e Turismo

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização moderna com variáveis CSS e animações
- **JavaScript (Vanilla)**: Interatividade e funcionalidades dinâmicas
- **Design Responsivo**: Adaptável para dispositivos móveis, tablets e desktops

## 📁 Estrutura do Projeto

```
ProlinsIALandpage/
│
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── scripts.js          # Scripts JavaScript
├── assets/             # Recursos estáticos
│   └── backgound eva.jpg  # Imagem de fundo
└── README.md           # Documentação do projeto
```

## 🎨 Seções da Landing Page

1. **Hero Section**: Apresentação principal com EVA (assistente virtual)
2. **Como Funciona**: Processo em 4 etapas
3. **Funcionalidades**: Destaque dos recursos principais
4. **Setores**: Segmentos de mercado atendidos
5. **Integração Prochat**: Detalhes da plataforma de atendimento
6. **CTA Final**: Formulário de contato para demonstração
7. **Footer**: Informações da empresa e links úteis

## 💻 Como Executar o Projeto

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/eduardorochadev/ProlinsIALandpage.git
   ```

2. **Navegue até o diretório do projeto**
   ```bash
   cd ProlinsIALandpage
   ```

3. **Execute com um servidor local** (recomendado)
   
   Usando Python:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   
   Usando Node.js (com npx):
   ```bash
   npx http-server
   ```
   
   Usando a extensão Live Server do VS Code:
   - Instale a extensão "Live Server"
   - Clique com o botão direito em `index.html`
   - Selecione "Open with Live Server"

4. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

   Ou simplesmente abra o arquivo `index.html` diretamente no navegador.

## 🎯 Funcionalidades Implementadas

### JavaScript

- **Menu Mobile**: Toggle do menu de navegação em dispositivos móveis
- **Modal de Chat**: Sistema de chat interativo com a assistente EVA
- **Animações de Scroll**: Cards aparecem com animação ao rolar a página
- **Formulário de Contato**: Validação e envio de dados
- **Botão "Voltar ao Topo"**: Navegação rápida para o início da página
- **Equalização de Altura**: Cards de features com altura uniforme

### CSS

- **Design System**: Variáveis CSS para cores e estilos consistentes
- **Responsividade**: Breakpoints para diferentes tamanhos de tela
- **Animações CSS**: Transições suaves e efeitos hover
- **Gradientes**: Uso de gradientes para botões e elementos de destaque
- **Backdrop Blur**: Efeitos de desfoque para elementos sobrepostos

## 🎨 Paleta de Cores

```css
--primary-color: #0052cc;    /* Azul principal */
--primary-dark: #003f9e;     /* Azul escuro */
--secondary-color: #f4f7fa;  /* Fundo claro */
--text-dark: #212529;        /* Texto principal */
--text-light: #5a6978;       /* Texto secundário */
--orange-gradient: linear-gradient(90deg, #ff6b2d, #ff8a3d); /* Gradiente laranja */
```

## 📱 Responsividade

O site é totalmente responsivo e adapta-se a diferentes tamanhos de tela:

- **Desktop**: Layout completo com múltiplas colunas
- **Tablet** (≤ 900px): Layout adaptado com menos colunas
- **Mobile** (≤ 768px): Layout em coluna única, menu hambúrguer
- **Mobile Pequeno** (≤ 576px): Otimizações adicionais para telas pequenas

## 🔧 Customização

### Alterar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --primary-color: #SuaCor;
    --secondary-color: #SuaCor;
    /* ... */
}
```

### Adicionar Novas Seções

1. Adicione o HTML em `index.html`
2. Crie os estilos correspondentes em `style.css`
3. Adicione funcionalidades JavaScript em `scripts.js` se necessário

### Modificar Conteúdo

Edite o arquivo `index.html` para alterar textos, imagens e links.

## 📧 Contato

**PROLINS SERVICOS DE INFORMATICA LTDA**
- **CNPJ**: 03.559.248/0001-96
- **Endereço**: Av. Washington Soares, 55 - Torre Empresarial, Fortaleza, CE - Brasil
- **Telefones**: (85) 99758-9196 | (11) 2124-3417
- **Email**: contato@prolins.com

## 📄 Licença

© 2025 Prolins IA. Todos os direitos reservados.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 🐛 Reportar Problemas

Encontrou um bug? Por favor, abra uma [issue](https://github.com/eduardorochadev/ProlinsIALandpage/issues) descrevendo:
- O comportamento esperado
- O comportamento atual
- Passos para reproduzir o problema
- Navegador e sistema operacional utilizados

## 🚀 Deploy

O projeto pode ser facilmente hospedado em plataformas gratuitas:

### GitHub Pages
1. Vá em Settings → Pages
2. Selecione a branch principal
3. O site ficará disponível em: `https://eduardorochadev.github.io/ProlinsIALandpage/`

### Netlify
1. Conecte seu repositório GitHub
2. Configure o build (não necessário para sites estáticos)
3. Deploy automático a cada push

### Vercel
1. Importe o projeto do GitHub
2. Deploy automático configurado

## 📊 Performance

- **Lighthouse Score**: Otimizado para performance, acessibilidade e SEO
- **Carregamento Rápido**: Sem dependências externas pesadas
- **Otimização de Imagens**: Recomenda-se comprimir imagens antes do deploy

## ✨ Recursos Futuros

- [ ] Integração com API de backend para formulário
- [ ] Chat funcional com IA
- [ ] Mais animações interativas
- [ ] Modo escuro
- [ ] Suporte a múltiplos idiomas
- [ ] Blog integrado

---

Desenvolvido com ❤️ pela equipe **Prolins IA**

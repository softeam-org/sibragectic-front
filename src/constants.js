import Luciano_IFS from "./assets/images/Luciano_IFS.jpg";
import Sergio from "./assets/images/sergio.jpg";

export const navLinks = [
  {
    name: "Início",
    path: "/",
    links: [
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
    ],
  },
  {
    name: "Programação",
    path: "/programacao",
    links: [
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
    ],
  },
  {
    name: "Inscrições",
    path: "/inscricoes",
    links: [
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
    ],
  },
  {
    name: "Submissão",
    path: "/submissao",
    links: [
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
      { name: "Sobre", path: "/sobre" },
    ],
  },
  {
    name: "Local",
    path: "/local",
    links: [
      { name: "UFAL", path: "/local/ufal" },
      { name: "Maceió", path: "/local/maceio" },
      { name: "Hotel do evento", path: "/local/hotel-do-evento" },
    ],
  },
];

// Path: src\components\Navbar\index.js


export const dayData = {
  1: {
    date: "Segunda, 30 de janeiro",
    schedule: [
      {
        time: "8h:30 - 10h:00",
        title: "Abertura",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elitiasty. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: Sergio,
          },
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: Luciano_IFS,
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Gestão Estratégica e Organizacional;",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
    ],
    speakers: [
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/300/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/400/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ]
  },
  2: {
    date: "Segunda, 30 de janeiro",
    schedule: [
      {
        time: "8h:30 - 10h:00",
        title: "Abertura",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
    ],
    speakers: [
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ]
  },
  3: {
    date: "Segunda, 30 de janeiro",
    schedule: [
      {
        time: "8h:30 - 10h:00",
        title: "Abertura",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          },
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
      {
        time: "10h:00 - 11h:30",
        title: "Lorem ipsum dolor sit amet 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        speakers: [
          {
            name: "Gestão Estratégica e Organizacional;",
            photo: "https://picsum.photos/200/300",
          }
        ]
      },
    ],
    speakers: [
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        name: "Gestão Estratégica e Organizacional;",
        photo: "https://picsum.photos/200/300",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ]
  }
}

// Path: src\pages\Programacao\index.js


export const subscribeInstructions = [
  {
    title: "As inscrições serão realizadas por depósito identificado",
    text: ["Os dados bancários da conta ANTAC EVENTOS são:",
    "Banco do Brasil (001)",
    "Agência 1899-6 (UFRGS)",
    "Conta Corrente: 104.104-5",
    "CNPJ: 59.838.045/0001-82 (para pix ou transferência de outros bancos)"],
  },
  {
    title: "Cada inscrição dará direito a publicação de dois artigos nos anais do evento. Os autores deverão efetuar sua inscrição até 15/09/2021.",
    text: "",
  },
  {
    title: "Inscrições por empenho",
    text: "Para inscrições por Empenho, entrar em contato através do e-mail: antac@ufrgs.br para receber as orientações."
  },
  {
    title: "Comprovante exigido (Exclusivo para estudantes de Graduação e Pós-graduação)",
    text: "Todos os comprovantes exigidos (comprovante de matrícula de graduação ou pós-graduação) deverão ser digitalizados e anexos no momento do cadastro no formato Jpg ou PDF."
  },
  {
    title: "Comprovante exigido (sócio ANTAC)",
    text: "O comprovante de pagamento da anuidade deverá ser digitalizado e anexo no momento do cadastro no formato .jpg ou .pdf."
  },
      
  ]

  export const articleInstructions = [
    {
      title: "Acesse a submissão ativa clicando em VISUALIZAR",
      text: ""
    },
    {
      title: 'Na aba AVALIAÇÃO > RODADA 1, em "REVISÕES", clique em ENVIAR ARQUIVO. Uma nova janela chamada "Enviar arquivo para avaliação" irá aparecer',
      text: "",
    },
    {
      title: 'Na janela "Enviar aquivo para avaliação", na aba CARREGAR ARQUIVO, selecione em Componentes do Artigo a opção "Texto do Artigo" e arraste o arquivo para a área de upload ou selecione enviar arquivo. O formato do artigo deve OBRIGATORIAMENTE ser em docx. Clique em CONTINUAR',
      text: ""
    },
    {
      title: 'Na janela "Enviar arquivo para avaliação", na aba METADADOS, altere o nome do arquivo para XXX-SIBRAGEC2021.docx, no qual XXX é o número da submissão. Por exemplo: 228-SIBRAGEC2021.docx . Clique em CONTINUAR',
      text: ""
    },
    {
      title: "Comprovante exigido (sócio ANTAC)",
      text: 'Na janela "Enviar arquivo para avaliação", na aba FINALIZAÇÃO, clique em CONCLUIR.'
    },
        
    ]

export const calendarData = [
  {
    date: "2021-09-15",
    event: "Início das inscrições"
  },
  {
    date: "2021-09-15",
    event: "Início das submissões"
  },
  {
    date: "2021-09-15",
    event: "Início das submissões"
  },
  {
    date: "2021-09-15",
    event: "Início das submissões"
  },
  {
    date: "2021-09-15",
    event: "Início das submissões"
  },
  {
    date: "2021-09-15",
    event: "Início das submissões"
  },
]

export const thematics =[
  {
    title: "Gestão da Cadeia de Suprimentos e Logística;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Produção Ensino de Gestão da Construção;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão de Contratos e de Aquisições;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão Sustentável nas Empresas e Canteiros de Obra;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Qualidade;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão do Conhecimento e da Informação;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão de Custos;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão de Riscos;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão Estratégica e Organizacional;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Saúde e Segurança do Trabalho;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Manutenção e de Operações;",
    link: "https://picsum.photos/200/300",
  },
  {
    title: "Gestão da Inovação;",
    link: "https://picsum.photos/200/300",
  },
  
]
import type {
  ProfileDetailsColumn,
  ProfileMenuItem,
  ProfileSummaryData,
} from "./types";

export const profileSummary: ProfileSummaryData = {
  titlePrefix: "Dra.",
  name: "Letícia Yumi",
  avatarSrc: "/perfil-avatar.png",
  avatarAlt: "Foto de perfil de Letícia Yumi",
};

export const profileMenuItems: ProfileMenuItem[] = [
  {
    id: "dados-cadastrais",
    label: "Dados cadastrais",
    icon: "clipboard",
    isActive: true,
  },
  {
    id: "ajuda",
    label: "Ajuda",
    icon: "help",
  },
];

export const profileDetailColumns: ProfileDetailsColumn[] = [
  {
    id: "left-column",
    sections: [
      {
        id: "personal-info",
        title: "Informações pessoais",
        rows: [
          {
            id: "full-name-row",
            fields: [
              {
                id: "full-name",
                label: "Nome completo",
                value: "Letícia Yumi Pereira da Silva",
                editLabel: "nome completo",
              },
            ],
          },
          {
            id: "email-row",
            fields: [
              {
                id: "email",
                label: "E-mail",
                value: "leticiayumi@gmail.com",
                editLabel: "e-mail",
              },
            ],
          },
          {
            id: "birth-date-row",
            fields: [
              {
                id: "birth-date",
                label: "Data de nascimento",
                value: "17/01/2004",
                editLabel: "data de nascimento",
              },
            ],
          },
          {
            id: "phone-row",
            fields: [
              {
                id: "phone",
                label: "Número de celular",
                value: "(21) 94002-8922",
                editLabel: "número de celular",
              },
            ],
          },
          {
            id: "cpf-row",
            fields: [
              {
                id: "cpf",
                label: "CPF",
                value: "000.000.000-00",
                editLabel: "CPF",
              },
            ],
          },
        ],
      },
      {
        id: "education",
        title: "Formação acadêmica",
        rows: [
          {
            id: "degree-row",
            fields: [
              {
                id: "degree",
                label: "Formação",
                value: "Odontologia",
                editLabel: "formação",
              },
            ],
          },
          {
            id: "institute-row",
            fields: [
              {
                id: "institute",
                label: "Instituto",
                value: "UFRJ",
                editLabel: "instituto",
              },
            ],
          },
          {
            id: "study-period-row",
            columns: 2,
            fields: [
              {
                id: "start-date",
                label: "Data de início",
                value: "22/03/2015",
                editLabel: "data de início",
              },
              {
                id: "end-date",
                label: "Data de término",
                value: "27/11/2020",
                editLabel: "data de término",
              },
            ],
          },
          {
            id: "specialization-row",
            fields: [
              {
                id: "specialization",
                label: "Área de especialização",
                value: "Estética dental",
                editLabel: "área de especialização",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "right-column",
    sections: [
      {
        id: "address",
        title: "Endereço",
        rows: [
          {
            id: "city-state-row",
            columns: 2,
            fields: [
              {
                id: "city",
                label: "Cidade",
                value: "Rio de Janeiro",
                editLabel: "cidade",
              },
              {
                id: "state",
                label: "Estado",
                value: "RJ",
                editLabel: "estado",
              },
            ],
          },
          {
            id: "district-row",
            fields: [
              {
                id: "district",
                label: "Bairro",
                value: "Engenho Novo",
                editLabel: "bairro",
              },
            ],
          },
          {
            id: "extra-row",
            fields: [
              {
                id: "extra",
                label: "Complemento",
                value: "-",
                editLabel: "complemento",
              },
            ],
          },
          {
            id: "zip-code-row",
            fields: [
              {
                id: "zip-code",
                label: "CEP",
                value: "00000-000",
                editLabel: "CEP",
              },
            ],
          },
        ],
      },
      {
        id: "password",
        title: "Altere sua senha",
        rows: [
          {
            id: "password-row",
            fields: [
              {
                id: "change-password",
                label: "Alterar senha",
                value: "••••••••••",
                editLabel: "senha",
              },
            ],
          },
        ],
      },
    ],
  },
];

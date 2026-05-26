"use client"

import { useState, useEffect } from "react"

// vou precisar criar um type que una a consulta e o paciente pra eu conseguir passar todos os dados que eu preciso e mostrar todos eles na tela 

export type Consulta = {
    id: string
    nome: string
    numero: string
    data: string
    idade: number
    fotoUrl: string
}

 export type Paciente = {
      id: number
      rg: string
      id_usuario: number
      usuario: {
          id: number
          no_usuario: string
          email_usuario: string
          cpf: string
          nu_celular: string
          genero: string
          data_nascimento: string
          imagem_usuario?: {
              url: string
          }
      }
  }

export type Dentista = {                                                                                            
      id: number                                                                                                      
      formacao: string                                                                                                
      instituto: string                                                                                               
      datainicio: string                  
      datatermino: string                                                                                             
      especializacao: string                                                                                          
      id_usuario: number                                                                                              
      usuario: {                                                                                                      
          id: number
          no_usuario: string
          email_usuario: string
          cpf: string
          nu_celular: string
          genero: string
          data_nascimento: string
          imagem_usuario?: {
              url: string
          }
      }
  }

export type DetalheDaConsulta = {                                                                                   
      id: number                                                                                                      
      DH: string                                                                                                      
      valor: number                                                                                                   
      tipo_pagamento: "particular" | "convenio"                                                                       
      status: string                                                                                                  
      tipo_consulta: string
      motivo: string                                                                                                  
      id_consulta: number
  }

export type ConsultaCardIDProps = Consulta & Paciente & Dentista & DetalheDaConsulta

export default function ConsultaCardID({nome, usuario: {cpf}, rg, usuario: {nu_celular}, usuario:{email_usuario}, idade, usuario: {no_usuario}, data, tipo_consulta, motivo, DH}:ConsultaCardIDProps){

    return(
        <div>
        <div className="flex w-[120vh] mt-[4vh] h-[80vh] px-52 justify-center items-center border border-solid border-gray-300 rounded-2xl bg-white">
            {/* informações da parte da esquerda */}
            <div className="flex flex-col w-[50vh] items-start ml-[12vh] gap-[10vh]">
                {/*duplinha foto + nome */}
                <div className="flex flex-row gap-[3vh]">
                    <img></img>
                    <p className="text-bold text-2xl"></p>
                </div>
                {/*parte toda de baixo */}
                <div className="flex flex-col">
                    <p>Nome completo</p>
                    <p>{nome}</p>
                </div>
                {/*duplinha de informações na div, lado a lado*/}
                <div className="flex flex-row gap-[3vh]">
                <div className="flex flex-col">
                    <p>CPF</p>
                    <p>{cpf}</p>
                </div>

                <div className="flex flex-col">
                    <p>CPF</p>
                    <p>{cpf}</p>
                </div>

                </div>

                <div className="flex flex-row gap-[3vh]">
                <div className="flex flex-col">
                    <p>Número de celular</p>
                    <p>{nu_celular}</p>
                </div>

                <div className="flex flex-col">
                    <p>Número de telefone</p>
                    <p>-</p>
                </div>

                </div>

                <div className="flex flex-col">
                    <p>Email</p>
                    <p>{email_usuario}</p>
                </div>

                <div className="flex flex-col">
                    <p>Idade</p>
                    <p>{idade}</p>
                </div>

                <div className="flex">
                    <button>Enviar mensagem</button>
                </div>
                </div>
                {/*fim da tropinha da esquerda */}

                {/*fazer uma barra vertical*/}
                <div className="h-[80vh] w-px bg-gray-400"></div>

                {/*parte da direita em cima */}

                <div>
                    <p>Informações da consulta</p>
                </div>

                <div className="flex flex-col">
                    <p>Profissional</p>
                    <p> Dr{nome}</p>
                </div>

                {/*dupla data e hora */}

                <div className="flex flex-row gap-[3vh]">
                <div className="flex flex-col">
                    <p>Data</p>
                    <p>{data}</p>
                </div>

                <div className="flex flex-col">
                    <p>Hora</p>
                    <p>{DH}</p>
                </div>

                </div>

                <div className="flex flex-col">
                    <p>Consulta</p>
                    <p>Particular</p>
                </div>

                {/*fazer uma barra horizontal*/}
                <div className="w-[80vh] h-px bg-gray-400"></div>
        </div>

                <div className="flex flex-col">
                    <p>Descrição do paciente</p>
                    <p>{motivo}</p>
                </div>

                <div className="flex flex-col">
                    <p>Tipo da Consulta</p>
                    <p>{tipo_consulta}</p>
                </div>

                <div className="flex flex-col">
                    <p>Documentos</p>
                </div>

                {/*'botões' que ficam em baixo de documentos, no figma eles não levam pra lugar nenhum, então eu vou levar em consideração que não precisa integrar e vou colocar só as imagens deles */}

                <div className="flex flex-row gap-[3vh]">
                    <img src={''}></img>
                    <img src={''}></img>
                    <img src={''}></img>
                    </div>                                       


  </div>  
    )
}
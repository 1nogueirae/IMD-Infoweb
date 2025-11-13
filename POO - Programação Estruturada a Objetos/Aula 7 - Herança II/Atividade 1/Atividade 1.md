# Atividade 01

## Enunciado:

Hoje, os celulares estão cada vez mais sofisticados, mp3, mp4, acesso web, câmera digital... Crie uma hierarquia de classes que possui no topo da hierarquia o celular mais básico, aquele que simplesmente liga e atende ligações, e que vai sendo refinada com várias outras classes que definem celulares mais sofisticados e modernos. Para isso, use a hierarquia e, nos construtores das classes, use o operador super. Na hierarquia, defina no mínimo três classes.

## Resolução:

A resolução da atividade está na pasta `app/ts`, dentro dos arquivos ``, seguindo esta estrutura:

### Classe Base (Superclasse): CelularBasico
- Função: Ligar, Enviar SMS.
- Atributo: Número, IMEI.

### Classe Intermediária: CelularMultimidia (Herda de CelularBasico)
- O que ganha: Toca MP3, Tira fotos.
- Atributo: Câmera Megapixel, Tamanho da Tela.

### Classe Topo: Smartphone (Herda de CelularMultimidia)
- O que ganha: Acesso Web, Sistema Operacional, Apps.
- Atributo: Versão OS, Conexão 5G.
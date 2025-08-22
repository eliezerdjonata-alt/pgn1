# Instruções para Hospedagem

## Arquivos para Upload

Após executar `npm run build`, você encontrará todos os arquivos prontos para hospedagem na pasta `dist/`.

### Estrutura dos arquivos gerados:
```
dist/
├── index.html          # Arquivo principal
├── assets/
│   ├── index-[hash].js # JavaScript compilado
│   └── index-[hash].css # CSS compilado
└── vite.svg           # Ícone (se necessário)
```

## Como fazer o upload:

1. **Acesse seu painel de hospedagem**
2. **Localize a pasta pública** (geralmente chamada de `public_html`, `www`, ou `htdocs`)
3. **Faça upload de todos os arquivos** da pasta `dist/` para a pasta pública
4. **Certifique-se** que o arquivo `index.html` está na raiz da pasta pública

## Verificação:

- Acesse seu domínio no navegador
- A página deve carregar normalmente
- Verifique se todos os estilos e funcionalidades estão funcionando

## Observações importantes:

- ✅ Código otimizado para produção
- ✅ CSS e JavaScript minificados
- ✅ Facebook Pixel configurado corretamente
- ✅ Links de compra funcionais
- ✅ Design responsivo
- ✅ Animações e efeitos visuais

## Suporte:

Se houver algum problema após o upload, verifique:
1. Se todos os arquivos foram enviados corretamente
2. Se as permissões dos arquivos estão corretas (644 para arquivos, 755 para pastas)
3. Se o arquivo index.html está na pasta raiz correta
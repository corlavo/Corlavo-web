# Marca CORLAVO

## Personalidad
Confiable, clínica pero cálida, moderna y precisa: como una clínica premium bien
llevada. Limpia, ordenada y humana. No futurista, sin neón ni robots, y sin
dientes ni sonrisas dibujadas: la marca debe poder crecer a medicina estética y
otras clínicas privadas.

## Nombre y descriptor
- Nombre: **CORLAVO**.
- El logo va **sin descriptor** para no encasillarlo en lo dental.
- El texto del sitio sí habla de clínicas dentales (la especialización vende);
  cuando se abra otra especialidad se cambia el texto, no el logo.
- Tagline actual: *Crecimiento digital para clínicas dentales.*

## Paleta
| Token | Hex | Uso |
|---|---|---|
| `--azul-profundo` | `#0B2A4A` | Titulares, logo, footer. Confianza y seriedad. |
| `--teal-clinico` | `#0E9F9A` | Íconos y acentos grandes. |
| `--teal-texto` | `#0A7A76` | Texto pequeño en teal (enlaces). Es el teal oscurecido para cumplir contraste AA. |
| `--menta-suave` | `#E8F6F4` | Fondos de secciones alternas. |
| `--blanco` | `#FFFFFF` | Fondo principal; mucho aire. |
| `--coral-calido` | `#FF6B4A` | **Solo botones de acción.** Con texto azul profundo, no blanco. |
| `--gris-texto` | `#475467` | Párrafos. |
| `--gris-linea` | `#E4E7EC` | Bordes y divisores. |

Contraste medido (WCAG): azul/blanco 14.5, gris/blanco 7.7, azul sobre coral 5.2,
teal oscuro/blanco 5.2. El teal claro sobre blanco da 3.3 y por eso no se usa en
texto pequeño. Texto blanco sobre coral no cumple, por eso los botones coral
llevan texto azul.

## Tipografía
Titulares: **Plus Jakarta Sans** (700–800). Texto: **Inter** (400–600). Ambas por
Google Fonts.

## Logo
Símbolo: burbuja de conversación redondeada con una palomita de "cita
confirmada". Dice conversación + agenda sin atarse a ninguna especialidad, y
funciona en un solo color y a 32 px.

Archivos en `/brand/`:
- `logo-horizontal.svg` (símbolo + wordmark), `logo-simbolo.svg`, `favicon.svg`.
- `logo-blanco.svg` para fondos oscuros.
- `og.png` imagen de 1200×630 para redes.
- `propuestas/`: 1) burbuja con palomita (la aplicada), 2) hoja doble, 3) arcos
  crecientes.

El wordmark en los SVG usa Plus Jakarta Sans; si se abre el archivo sin esa
fuente instalada se verá en una de respaldo. Para impresión conviene convertir el
texto a curvas.

Reglas: no deformar, margen libre igual a la altura de la palomita, no usar sobre
fondos que bajen el contraste.

## Estilo
Esquinas de 12 a 16 px, sombras suaves, mucho aire, íconos de línea en teal. Las
fotos reales de clínicas (de clientes con permiso) sustituyen los mockups cuando
existan.

## Tono de voz
De colega a colega, profesional y directo. Tuteo. Vocabulario de clínica:
pacientes, citas, agenda, sillón, inasistencias, recordatorios, reseñas. Sin
jerga técnica (nada de "LLM", "API" o "funnel" en el texto visible, salvo la
mención de la API oficial de WhatsApp en las preguntas frecuentes).

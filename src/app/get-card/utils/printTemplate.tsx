export const getPrintWindowHTML = (imgData: string): string => `
  <html>
    <head>
      <title>신분증 인쇄</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: white;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <img src="${imgData}" alt="Identify Card" />
      <script>
        window.onload = function() {
          window.print();
          window.onafterprint = function() {
            window.close();
          };
        };
      </script>
    </body>
  </html>
`;

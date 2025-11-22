'use client';

import { useState } from 'react';

export default function Page() {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    setError(null);
    setDownloading(true);
    try {
      const res = await fetch('/api/generate', { method: 'POST' });
      if (!res.ok) {
        throw new Error(`Erreur: ${res.status}`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'RevitAnalyticalModelAddin.zip';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      setError(e?.message ?? 'Une erreur est survenue.');
    } finally {
      setDownloading(false);
    }
  }

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>G?n?rateur de mod?le analytique Revit</h1>
      <p style={{ color: '#444', marginBottom: 24 }}>
        T?l?chargez un projet d?add-in Revit (C#) qui cr?e un mod?le analytique avec poteaux ? section
        variable, voiles courbes, coupoles et planchers.
      </p>
      <button
        onClick={handleGenerate}
        disabled={downloading}
        style={{
          background: '#111',
          color: 'white',
          border: 0,
          padding: '12px 18px',
          borderRadius: 8,
          cursor: downloading ? 'default' : 'pointer'
        }}
      >
        {downloading ? 'G?n?ration?' : 'T?l?charger le code source (.zip)'}
      </button>
      {error && <p style={{ color: 'crimson', marginTop: 16 }}>{error}</p>}
      <div style={{ marginTop: 40, fontSize: 12, color: '#666' }}>
        <p>
          Contenu: solution C# (.csproj) pour Revit, commande unique qui cr?e les ?l?ments
          structurels et leur mod?le analytique associ?.
        </p>
      </div>
    </main>
  );
}


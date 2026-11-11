import React, { useState } from 'react';
import { Terminal, Copy, Check, Radio, ExternalLink } from 'lucide-react';

export const CliDocsPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = (cmd: string, index: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const cliCommands = [
    {
      title: '1. Install Arcade Developer CLI',
      desc: 'Install the global CLI to manage endpoints and forward webhooks locally.',
      cmd: 'npm install -g @webhook-arcade/cli',
    },
    {
      title: '2. Authenticate CLI Session',
      desc: 'Link your CLI to your Webhook Arcade instance.',
      cmd: 'arcade login',
    },
    {
      title: '3. Create a New Webhook Receiver',
      desc: 'Generate a dedicated endpoint directly from your terminal.',
      cmd: 'arcade endpoint create --name "Local Development"',
    },
    {
      title: '4. Forward Webhooks to Localhost (Local Tunneling)',
      desc: 'Stream captured webhooks directly to your local development server.',
      cmd: 'arcade listen --to http://localhost:3000/api/webhooks',
    },
    {
      title: '5. Inspect Recent Events',
      desc: 'List captured deliveries and status codes in your terminal.',
      cmd: 'arcade events --limit 10',
    },
    {
      title: '6. Replay a Specific Event',
      desc: 'Trigger an immediate redelivery of a historical event ID.',
      cmd: 'arcade replay evt_3MtwEN2eZvKYlo2C',
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-6 space-y-6 bg-canvas">
      <div>
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-violet-400" />
          <h2 className="text-lg font-bold text-white">Arcade CLI & Local Forwarding</h2>
        </div>
        <p className="text-xs text-slate-400">
          Stream incoming cloud webhooks directly into your local machine using the Arcade CLI.
        </p>
      </div>

      <div className="space-y-4">
        {cliCommands.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-surface p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-white">{item.title}</h3>
              <button
                onClick={() => copyCommand(item.cmd, idx)}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
              >
                {copiedIndex === idx ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-400">{item.desc}</p>
            <div className="rounded-lg bg-black/60 p-3 font-mono text-xs text-cyan-300 overflow-x-auto">
              $ {item.cmd}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


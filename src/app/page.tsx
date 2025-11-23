'use client';

import { useState } from 'react';
import { MainShell } from '@/components/Layout/MainShell';
import { LeftNav } from '@/components/Layout/LeftNav';
import { RightTLDR } from '@/components/Layout/RightTLDR';
import { BottomBar } from '@/components/Layout/BottomBar';
import { MeetingsModule } from '@/components/Modules/Meetings';
import { SchedulingModule } from '@/components/Modules/Scheduling';
import { FinanceModule } from '@/components/Modules/Finance';
import { LearningModule } from '@/components/Modules/Learning';
import { ModuleName } from '@/types/modules';

export default function Home() {
  const [activeModule, setActiveModule] = useState<ModuleName>('meetings');

  // Render active module content
  const renderModuleContent = () => {
    switch (activeModule) {
      case 'meetings':
        return <MeetingsModule />;
      case 'scheduling':
        return <SchedulingModule />;
      case 'finance':
        return <FinanceModule />;
      case 'learning':
        return <LearningModule />;
      default:
        return <MeetingsModule />;
    }
  };

  return (
    <MainShell
      leftNav={
        <LeftNav
          activeModule={activeModule}
          onModuleChange={setActiveModule}
        />
      }
      rightPanel={<RightTLDR activeModule={activeModule} />}
      bottomBar={<BottomBar activeModule={activeModule} />}
    >
      {renderModuleContent()}
    </MainShell>
  );
}


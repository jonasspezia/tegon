/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { AppLayout } from 'common/layouts/app-layout';

import { TeamStoreInit } from 'store/team-store-provider';

import { FiltersView } from './all/filters-view';
import { Header } from './all/header';
import { ListView } from './all/list-view';

export const BacklogIssues = () => {
  return (
    <main className="flex flex-col h-[100vh] overflow-hidden">
      <Header title="Backlog" />
      <FiltersView />
      <div className="grow overflow-y-auto">
        <ListView />
      </div>
    </main>
  );
};

BacklogIssues.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AppLayout>
      <TeamStoreInit>{page}</TeamStoreInit>
    </AppLayout>
  );
};
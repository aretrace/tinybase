/// persisters

import {NoSchemas, OptionalSchemas, Store, Tables, Values} from './store.d';
import {Callback} from './common.d';

/// PersisterStats
export type PersisterStats = {
  /// PersisterStats.loads
  loads?: number;
  /// PersisterStats.saves
  saves?: number;
};

/// Persister
export interface Persister<Schemas extends OptionalSchemas = NoSchemas> {
  /// Persister.load
  load(
    initialTables?: Tables<Schemas[0], true>,
    initialValues?: Values,
  ): Promise<Persister<Schemas>>;

  /// Persister.startAutoLoad
  startAutoLoad(
    initialTables?: Tables<Schemas[0], true>,
    initialValues?: Values,
  ): Promise<Persister<Schemas>>;

  /// Persister.stopAutoLoad
  stopAutoLoad(): Persister<Schemas>;

  /// Persister.save
  save(): Promise<Persister<Schemas>>;

  /// Persister.startAutoSave
  startAutoSave(): Promise<Persister<Schemas>>;

  /// Persister.stopAutoSave
  stopAutoSave(): Persister<Schemas>;

  /// Persister.getStore
  getStore(): Store<Schemas>;

  /// Persister.destroy
  destroy(): Persister<Schemas>;

  /// Persister.getStats
  getStats(): PersisterStats;
}

/// createSessionPersister
export function createSessionPersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  storageName: string,
): Persister<Schemas>;

/// createLocalPersister
export function createLocalPersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  storageName: string,
): Persister<Schemas>;

/// createRemotePersister
export function createRemotePersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  loadUrl: string,
  saveUrl: string,
  autoLoadIntervalSeconds: number,
): Persister<Schemas>;

/// createFilePersister
export function createFilePersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  filePath: string,
): Persister<Schemas>;

/// createCustomPersister
export function createCustomPersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  getPersisted: () => Promise<string | null | undefined>,
  setPersisted: (json: string) => Promise<void>,
  startListeningToPersisted: (didChange: Callback) => void,
  stopListeningToPersisted: Callback,
): Persister<Schemas>;

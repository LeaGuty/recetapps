import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Parche para entornos de Node
Object.assign(global, { TextEncoder, TextDecoder });
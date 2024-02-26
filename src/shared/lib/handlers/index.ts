import axios from 'axios';

import { PUBLIC_API } from '$env/static/public';

export const api = axios.create({ baseURL: PUBLIC_API });

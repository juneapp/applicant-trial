export type Project = {
    id: number;
    title: string;
    key: string;
    groups: Group[];
    document_id: string;
};

export type Group = {
    id: number;
    name: string;
};

export type User = {
    id: number;
    username: string;
    email: string;
    modules: string[];
    groups: Group[];
    customer: Customer;
    enabled: boolean;
    roles: string[];
    created_at: string | null;
    accepted_terms: boolean;
    integration_api_token: string | null;
    client_tour_data: any[];
    two_factor_authentication_enabled: boolean;
    two_factor_authentication_verified: boolean;
    intercom_hash: string;
    skill_level: string | null;
    ui_theme: string;
    ui_locale: string;
    is_activated: boolean;
    additional_email_addresses: string | null;
};

export type Customer = {
    id: number;
    name: string;
    licenses: any[];
    technical_name: string;
    cdn_id: string;
    cdn_url: string;
    external_identifier: string;
    branding_level: number;
    enable_user_collaboration: boolean;
    force_two_factor_authentication: boolean;
};

export type LoginResponse = {
    token: string;
    user: User;
};

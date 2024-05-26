export interface Filter {
    startDate?: string;
    endDate?: string;
}

export interface ReportIncomeFilter extends Filter {
    status?: string;
    brandId?: number;
}

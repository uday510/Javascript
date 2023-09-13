// SELECT l.lead_id, l.campaign_id, l.user_id,
//        l.campaign_id, l.user_id, l.lead_stage_id,
//        l.date_created, l.lead_statud, l.next_followup_date,
//        cn.contact_number, cn.contact_number_id,
//        cnt.contact_id, cnt.contact_name,
//        l.org_id, l.contact_id
//     FROM public.campaign_lead l
//     JOIN 
//         public.contact_number cn ON l.org_id = cn.org_id AND
//         l.contact_id = cn.contact_id AND
//         cn.is_deleted = true AND cn_is_primary = true
//     JOIN 
//         public.contact cnt ON
//         l.org_id = cnt.org_id AND l.contact_id = cnt.contact_id
//         AND cnt.is_deleted = false
//     WHERE l.org_id = '8a4efbf7-491b-421a-8e58-1e3d787975be' AND 
//     l.campaign_id = '3e13b95f-1aa1-4fc3-8074-a6ee4a5dd5d2' AND l.deleted_at IS NULL
// 	AND l.date_created >= '2022-08-11 00:00:00' AND
//     l.date_created <=  '2022-12-21 23:59:59' ORDER BY l.insertion_serial_id DESC;    

SELECT 
    contact_list_id, contact_data_source_id
    FROM 
    contact_custom_date ccd
    JOIN 
    public.campaign_lead l ON 
    ccd.campaign_lead_id = l.campaign_lead
    WHERE org_id = '8a4efbf7-491b-421a-8e58-1e3d787975be'  AND ( (custom_column_id = '206' AND
            custom_column_value ILIKE 'guj%') )  
    
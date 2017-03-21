CREATE PROCEDURE `sp_get_pendingpayment_rent`(p_rentId int)
BEGIN
	DECLARE pending INT;
    DECLARE i INT;
    DECLARE counter INT;
    drop temporary table if exists valida;
    create temporary table valida (
		id int unsigned not null,
        valid int null,
		date date not null
	);
    
	SELECT timestampdiff(month, r.startDate,  DATE_ADD(NOW(), INTERVAL 12 MONTH)) FROM rent r WHERE r.rentId = p_rentId INTO pending;
	SET i = 0;
    SET counter = 0;

    WHILE(i < pending) DO
		SET i = i + 1;

		INSERT INTO valida
        SELECT i, COALESCE(sum(p.amount),0) < r.total, DATE_ADD(date(r.startDate), INTERVAL i-1 MONTH)
			from payment p
			INNER JOIN rent r ON p.rentId = r.rentId
			WHERE p.rentId = p_rentId AND p.date BETWEEN DATE_ADD(date(r.startDate), INTERVAL i-1 MONTH) AND DATE_ADD(date(r.startDate), INTERVAL i MONTH);
        
        
    END WHILE;
    
	select * FROM valida;
    drop temporary table if exists valida;
END
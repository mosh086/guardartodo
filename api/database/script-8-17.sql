ALTER TABLE `guardartododb`.`rent`
ADD COLUMN `authorization` VARCHAR(4000) NULL AFTER `folio`;


SELECT st.*, stl.*
	FROM guardartododb.storageloker st
    INNER JOIN guardartododb.storagelokertype stl ON stl.storagelokertypeId = st.storagelokertypeId
WHERE st.enable = 1 AND stl.enable = 0;

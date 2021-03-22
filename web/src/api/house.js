import { postAxios, getAxios, postDownloadAxios } from '@/lib/http';

export const houseApi = {
    // 添加房源 @author Kareza
    addPeony: (data) => {
        return postAxios('/peony/add', data);
    },
    // 分页查询房源信息 @author Kareza
    queryHouse: (data) => {
        return postAxios('/housingResource/page/query', data);
    },
    // 批量删除牡丹花 @author 卓大
    batchDeletePeony: (idList) => {
        return postAxios('/peony/deleteByIds', idList);
    },
    // 修改牡丹花  @author 卓大
    updatePeony: (data) => {
        return postAxios('/peony/update',data);
    },
    // 导出全部  @author 卓大
    exportAll:(data)=>{
        return postDownloadAxios('/peony/export/all',data);
    },
    // 批量导出  @author 卓大
    batchExport: (idList) => {
        return postDownloadAxios('/peony/export/batch', idList);
    },
};
